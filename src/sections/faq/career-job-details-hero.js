import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import { useTranslation } from 'src/contexts/TranslationContext';

import GetQuoteModal from 'src/components/get-quote-modal/modal';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export default function CareerJobDetailsHero() {
    const { trans } = useTranslation();
    const theme = useTheme();

    const [open, setOpen] = useState(false); // State to control the modal

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box
                sx={{
                    ...bgGradient({
                        color: alpha(theme.palette.grey[900], 0.8),
                        imgUrl: '/assets/background/overlay_2.jpg',
                    }),
                    pt: 5,
                    pb: 10,
                }}
            >
                <Container>
                    <CustomBreadcrumbs
                        links={[
                            { name: trans('p_faq_nav_home_text'), href: '/' },
                            { name: trans('p_faq_nav_text') },
                        ]}
                        sx={{
                            mb: { xs: 5, md: 8 },
                            '& a': {
                                color: 'common.white',
                            },
                        }}
                    />

                    <Stack
                        spacing={5}
                        direction={{ xs: 'column', md: 'row' }}
                        justifyContent={{ md: 'space-between' }}
                        textAlign='center'
                    >
                        <Stack spacing={{ xs: 3, md: 2 }} sx={{ color: 'common.white', mx: 'auto' }}>
                            <Typography variant="h3" component="h1">
                                {trans('p_faq_hero_title')}
                            </Typography>
                        </Stack>
                    </Stack>

                </Container>
            </Box>
            <Stack
                spacing={2}
                direction="row"
                alignItems="flex-center"
                sx={{ width: '100%', py: 2.5, mx: 'auto', bgcolor: 'background.neutral' }}
            >
                <Stack spacing={2} alignItems="center" sx={{ width: 1, maxWidth: 340, mx: 'auto' }}>
                    <Button
                        fullWidth variant="contained"
                        size="large"
                        color="primary"
                        onClick={() => window.open('https://app.mescolis.ca/', '_blank')}
                    >
                        {trans('p_faq_hero_button')}
                    </Button>
                </Stack>
            </Stack>

            {open && (
                <GetQuoteModal isOpen={open} onClose={handleClose} />
            )}

        </>
    );
}

CareerJobDetailsHero.propTypes = {
    job: PropTypes.shape({
        slug: PropTypes.string,
        favorited: PropTypes.bool,
        category: PropTypes.string,
        location: PropTypes.string,
        totalViews: PropTypes.number,
        deadline: PropTypes.instanceOf(Date),
    }),
};
