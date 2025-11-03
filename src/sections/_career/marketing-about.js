import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { textGradient } from 'src/theme/styles';
import { useTranslation } from 'src/contexts/TranslationContext';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import GetQuoteModal from 'src/components/get-quote-modal/modal';

export default function MarketingAbout() {
    const { trans } = useTranslation();

    const [open, setOpen] = useState(false); // State to control the modal
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // ----------------------------------------------------------------------

    const LISTS = [
        trans('home_info_list_1'),
        trans('home_info_list_2'),
        trans('home_info_list_3'),
        trans('home_info_list_4'),
        trans('home_info_list_5'),
        trans('home_info_list_6'),
    ];

    // ----------------------------------------------------------------------

    return (
        <Container
            sx={{
                pt: {},
                pb: 10,
            }}
        >
            <Grid container spacing={3} justifyContent="space-between" alignItems="center">

                <Grid xs={12} md={6} lg={6} sx={{
                    mb: { xs: 5, md: 0 },
                    pr: { xs: 0, md: 8 },
                }}>
                    <Image alt="teams" src="/assets/images/marketing/melcoris_hero.png" sx={{
                        margin: 'auto',
                        height: { xs: '100%', md: 420 },
                    }} />
                </Grid>

                <Grid
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Typography variant="h2" sx={{ my: 3 }}>
                        {trans('home_info_title_1')}
                        <Box
                            component="span"
                            sx={{
                                ...textGradient(
                                    `90deg, #078DEE 20%, #FFA03F 100%`
                                ),
                            }}
                        >
                            {trans('home_info_title_highlight')}
                        </Box>
                        {trans('home_info_title_2')}
                    </Typography>

                    <Typography sx={{ mt: 3, mb: 3, color: 'text.secondary' }}>
                        {trans('home_info_description')}
                    </Typography>

                    <Stack spacing={2}>
                        {LISTS.map((text) => (
                            <Stack key={text} direction="row" alignItems="center">
                                <Box
                                    component="span"
                                    sx={{
                                        mr: 2,
                                        width: 6,
                                        height: 6,
                                        borderRadius: '50%',
                                        bgcolor: 'primary.main',
                                    }}
                                />
                                {text}
                            </Stack>
                        ))}
                    </Stack>

                    <Button
                        variant="outlined"
                        color="inherit"
                        size="large"
                        endIcon={<Iconify icon="carbon:chevron-right" />}
                        sx={{ mt: 3 }}
                        onClick={() => window.open('https://app.mescolis.ca/', '_blank')}
                    >
                        {trans('home_info_button')}
                    </Button>
                </Grid>
            </Grid>

            {/* Modal Implementation */}
            {open && <GetQuoteModal isOpen={open} onClose={handleClose} />}

        </Container>
    );
}
