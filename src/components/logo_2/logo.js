import PropTypes from 'prop-types';
import { memo, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

function Logo({ single = false, isScrolled = false, sx }) {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    // Check if current page is the homepage
    if (typeof window !== 'undefined') {
      setIsHomePage(window.location.pathname === '/');
    }
  }, []);

  // Conditionally set logo based on whether on the homepage or not
  const logoSrc = isHomePage && !isScrolled
    ? '/assets/logo/mescolis_title_only_black.png'
    : '/assets/logo/mescolis_title_only_black.png';

  const singleLogoSrc = isHomePage && !isScrolled
    ? '/assets/logo/mescolis_black_logo_single.png'
    : '/assets/logo/mescolis_black_logo_single.png';

  const singleLogo = (
    <Box
      component="img"
      src={single ? singleLogoSrc : logoSrc}
      sx={{
        width: 80,
        cursor: 'pointer',
        ...sx,
      }}
    />
  );

  const fullLogo = (
    <Box
      component="img"
      src={single ? singleLogoSrc : logoSrc}
      sx={{
        width: '180px!important',
        cursor: 'pointer',
        ...sx,
      }}
    />
  );

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

Logo.propTypes = {
  single: PropTypes.bool,
  sx: PropTypes.object,
  isScrolled: PropTypes.bool,
};

export default memo(Logo);
