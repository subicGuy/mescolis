import PropTypes from 'prop-types';
import { useCallback } from 'react';

import Popover from '@mui/material/Popover';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { usePopover } from 'src/hooks/use-popover';

import { useTranslation } from 'src/contexts/TranslationContext';

import { FlagIcon } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function LanguagePopover({ data = [], sx, ...other }) {
  const openLangs = usePopover();

  const { changeLanguage, language } = useTranslation();

  const currentLang = data.find((lang) => lang.value === language);

  const handleChangeLang = useCallback(
    (newLang) => {
      changeLanguage(newLang);
      openLangs.onClose();
    },
    [openLangs, changeLanguage]
  );

  return (
    <>
      <IconButton
        onClick={openLangs.onOpen}
        sx={{
          p: 0,
          width: 40,
          height: 40,
          ...(openLangs.open && { bgcolor: 'action.selected' }),
          ...sx,
        }}
        {...other}
      >
        <FlagIcon code={currentLang?.countryCode} />
      </IconButton>

      <Popover
        open={openLangs.open}
        anchorEl={openLangs.anchorEl}
        onClose={openLangs.onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuList sx={{ width: 160, minHeight: 72 }}>
          {data?.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === currentLang?.value}
              onClick={() => handleChangeLang(option.value)}
              sx={{ gap: 2 }}
            >
              <FlagIcon code={option.countryCode} />
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
}

// Add PropTypes validation
LanguagePopover.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  sx: PropTypes.object,
};
