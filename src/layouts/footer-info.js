import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'src/contexts/TranslationContext';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function MarketingNewsletter({ sx, ...other }) {
    const { trans } = useTranslation();

    return (
        <Box sx={{ py: 8, bgcolor: 'background.neutral', ...sx }} {...other}>
            <Container>
                <Stack
                    spacing={3}
                    alignItems="center"
                    justifyContent="space-between"
                    direction={{ xs: 'column', md: 'row' }}
                >
                    <Stack
                        spacing={3}
                        alignItems="center"
                        direction={{ xs: 'column', md: 'row' }}
                        sx={{ textAlign: { xs: 'center', md: 'left' } }}
                    >
                        <SvgColor
                            src="/assets/icons/ic_newsletter.svg"
                            sx={{ width: 80, height: 80, color: 'primary.main' }}
                        />

                        <Stack spacing={1}>
                            <Typography variant="h4">{trans('footer_info_title')}</Typography>

                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {trans('footer_info_description')}
                            </Typography>
                        </Stack>
                    </Stack>

                    {/* <TextField
                        fullWidth
                        hiddenLabel
                        placeholder={trans('footer_info_button_placeholder')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button
                                        size="large"
                                        color="inherit"
                                        variant="contained"
                                        href='https://mesdash.wise-choice.net/auth/jwt/sign-up/'
                                        sx={{
                                            height: 54,
                                            borderTopLeftRadius: 0,
                                            borderBottomLeftRadius: 0,
                                        }}
                                    >
                                        {trans('footer_info_button')}
                                    </Button>
                                </InputAdornment>
                            ),
                            sx: { pr: 0 },
                        }}
                        sx={{ maxWidth: 466 }}
                    /> */}
                    <Button
                        size="large"
                        color="inherit"
                        variant="contained"
                        sx={{
                            height: 54,
                        }}
                        onClick={() => window.open('https://app.mescolis.ca/auth/api/sign-up/', '_blank')}
                    >
                        {trans('footer_info_button')}
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}

MarketingNewsletter.propTypes = {
    sx: PropTypes.object,
};
