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

export default function CareerJobDetailsHero({ job }) {
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
                        { name: trans('p_how_it_works_nav_home_text'), href: '/' },
                        { name: trans('p_how_it_works_nav_text') },
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
                >
                    <Stack spacing={{ xs: 3, md: 2 }} sx={{ color: 'common.white' }}>
                        <Typography variant="h3" component="h1">
                            {trans('p_how_it_works_hero_title')}
                        </Typography>
                    </Stack>

                    <Stack
                        spacing={2}
                        direction="row"
                        alignItems="flex-start"
                        sx={{ width: 1, maxWidth: 340 }}
                    >
                        <Stack spacing={2} alignItems="center" sx={{ width: 1 }}>
                            <Button 
                                fullWidth variant="contained" 
                                size="large" 
                                color="primary"
                                onClick={() => window.open('https://app.mescolis.ca/', '_blank')}
                            >
                                {trans('p_how_it_works_hero_button')}
                            </Button>
                        </Stack>
                    </Stack>

                </Stack>
            </Container>

            {/* Modal Implementation */}
            {open && (
                <GetQuoteModal isOpen={open} onClose={handleClose} />
            )}

        </Box>
    );
}

CareerJobDetailsHero.propTypes = {
    job: PropTypes.shape({
        slug: PropTypes.string,
        category: PropTypes.string,
        location: PropTypes.string,
        totalViews: PropTypes.number,
        deadline: PropTypes.instanceOf(Date),
    }),
};
