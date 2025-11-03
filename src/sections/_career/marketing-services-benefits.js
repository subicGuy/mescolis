import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { textGradient } from 'src/theme/styles';
import { useTranslation } from 'src/contexts/TranslationContext';

import Iconify from 'src/components/iconify';
import GetQuoteModal from 'src/components/get-quote-modal/modal';

export default function MarketingServicesBenefits() {
    const { trans } = useTranslation();

    const mdUp = useResponsive('up', 'md');

    const [open, setOpen] = useState(false); // State to control the modal
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // ----------------------------------------------------------------------

    const BENEFITS = [
        {
            title: trans('home_benefits_list_1'),
            description: trans('home_benefits_list_1_description'),
            iconColor: 'primary',
        },
        {
            title: trans('home_benefits_list_2'),
            description: trans('home_benefits_list_2_description'),
            iconColor: 'secondary',
        },
        {
            title: trans('home_benefits_list_3'),
            description: trans('home_benefits_list_3_description'),
            iconColor: 'primary',
        },
        {
            title: trans('home_benefits_list_4'),
            description: trans('home_benefits_list_4_description'),
            iconColor: 'secondary',
        },
    ];

    // ----------------------------------------------------------------------

    return (
        <Box
            sx={{
                bgcolor: 'background.neutral',
                py: { xs: 10, md: 15 },
            }}
        >
            <Container>

                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    {trans('home_benefits_title')}
                    <Box
                        component="span"
                        sx={{
                            ...textGradient(
                                `90deg, #078DEE 20%, #FFA03F 100%`
                            ),
                        }}
                    >
                        {trans('home_benefits_title_highlight')}
                    </Box>
                </Typography>

                <Typography
                    sx={{
                        mt: 3,
                        mx: 'auto',
                        opacity: 0.72,
                        maxWidth: 480,
                        textAlign: 'center',
                        mb: { xs: 8, md: 10 },
                    }}
                >
                    {trans('home_benefits_subtitle')}
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        alignItems: 'center',
                        gap: { xs: 2, md: 4 },
                        gridTemplateColumns: { md: 'repeat(3, 1fr)' },
                    }}
                >
                    <Stack spacing={{ xs: 4, md: 10 }}>
                        {BENEFITS.slice(0, 2).map((benefit, index) => (
                            <BenefitItem key={benefit.title} benefit={benefit} index={index} reverse />
                        ))}
                    </Stack>

                    {mdUp && <Stack spacing={1.5}>
                        <Typography variant="subtitle1" sx={{ mx: 'auto' }}>
                            {trans('home_benefits_location_sample_1')}
                        </Typography>

                        <Divider
                            flexItem
                            orientation="horizontal"
                            sx={{ mx: 6, borderStyle: 'dashed' }}
                        />

                        <Stack
                            direction="row"
                            alignItems="center"
                            divider={
                                <Divider
                                    flexItem
                                    orientation="vertical"
                                    sx={{ ml: 3, mr: 3, borderStyle: 'dashed' }}
                                />
                            }
                            sx={{ mx: 'auto', textAlign: 'center' }}
                        >
                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150 }}>
                                <Stack direction="row">
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px', fontWeight: '500' }}> 108.58 </Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    {trans('home_benefits_carrier_text')}
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>
                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150 }}>
                                <Stack direction="row">
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px' }}>44.18</Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    {trans('home_benefits_mescolis_text')}
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>
                        </Stack>

                        <Typography variant="caption" sx={{ mx: 'auto' }}>
                            {trans('home_benefits_rate_date')}
                        </Typography>


                        <Typography variant="subtitle1" sx={{ mx: 'auto', mt: 4 }}>
                            {trans('home_benefits_location_sample_2')}
                        </Typography>

                        <Divider
                            flexItem
                            orientation="horizontal"
                            sx={{ mx: 6, borderStyle: 'dashed' }}
                        />

                        <Stack
                            direction="row"
                            alignItems="center"
                            divider={
                                <Divider
                                    flexItem
                                    orientation="vertical"
                                    sx={{ ml: 3, mr: 3, borderStyle: 'dashed' }}
                                />
                            }
                            sx={{ mx: 'auto', textAlign: 'center' }}
                        >
                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150 }}>
                                <Stack direction="row">
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4', ml: 1 }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px', fontWeight: '500' }}> 74.74 </Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4', mr: 1 }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    {trans('home_benefits_carrier_text')}
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>
                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150 }}>
                                <Stack direction="row">
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px' }}>33.84</Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    {trans('home_benefits_mescolis_text')}
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>
                        </Stack>

                        <Typography variant="caption" sx={{ mx: 'auto' }}>
                            {trans('home_benefits_rate_date')}
                        </Typography>


                    </Stack>}

                    <Stack spacing={{ xs: 4, md: 10 }}>
                        {BENEFITS.slice(-2).map((benefit, index) => (
                            <BenefitItem key={benefit.title} benefit={benefit} index={index} />
                        ))}
                    </Stack>
                </Box>

                {!mdUp && <Grid
                    container
                    sx={{

                        display: 'grid',
                        alignItems: 'flex-end',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                        },
                        mt: 4
                    }}
                >

                    <Grid >
                        <Typography variant="subtitle1" sx={{ textAlign: 'center', pb: 1 }}>
                            {trans('home_benefits_location_sample_1')}
                        </Typography>

                        <Divider
                            flexItem
                            orientation="horizontal"
                            sx={{ mx: 6, mb: 2, borderStyle: 'dashed' }}
                        />

                        <Stack
                            direction="row"
                            alignItems="center"
                            divider={
                                <Divider
                                    flexItem
                                    orientation="vertical"
                                    sx={{ ml: 3, mr: 3, borderStyle: 'dashed' }}
                                />
                            }
                            sx={{ mx: 'auto', textAlign: 'center' }}
                        >
                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150, mx: 'auto' }}>

                                <Stack direction="row" sx={{ mx: 'auto' }}>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px', fontWeight: '500' }}> 108.58 </Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    {trans('home_benefits_carrier_text')}
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>

                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150, mx: 'auto' }}>
                                <Stack direction="row" sx={{ mx: 'auto' }}>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px' }}>44.18</Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    {trans('home_benefits_mescolis_text')}
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>
                        </Stack>

                        <Stack sx={{ pt: 2, pb: 2 }}>
                            <Typography variant="caption" sx={{ textAlign: 'center' }}>
                                {trans('home_benefits_rate_date')}
                            </Typography>
                        </Stack>


                    </Grid>

                    <Grid >
                        <Typography variant="subtitle1" sx={{ textAlign: 'center', pb: 1 }}>
                            {trans('home_benefits_location_sample_2')}
                        </Typography>

                        <Divider
                            flexItem
                            orientation="horizontal"
                            sx={{ mx: 6, mb: 2, borderStyle: 'dashed' }}
                        />

                        <Stack
                            direction="row"
                            alignItems="center"
                            divider={
                                <Divider
                                    flexItem
                                    orientation="vertical"
                                    sx={{ ml: 3, mr: 3, borderStyle: 'dashed' }}
                                />
                            }
                            sx={{ mx: 'auto', textAlign: 'center' }}
                        >
                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150, mx: 'auto' }}>

                                <Stack direction="row" sx={{ mx: 'auto' }}>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px', fontWeight: '500' }}> 77.74 </Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    {trans('home_benefits_carrier_text')}
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>

                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150, mx: 'auto' }}>
                                <Stack direction="row" sx={{ mx: 'auto' }}>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px' }}>33.84</Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    {trans('home_benefits_mescolis_text')}
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>
                        </Stack>

                        <Stack sx={{ pt: 2, pb: 2 }}>
                            <Typography variant="caption" sx={{ textAlign: 'center' }}>
                                {trans('home_benefits_rate_date')}
                            </Typography>
                        </Stack>


                    </Grid>

                </Grid>}


                <Stack alignItems="center">
                    <Button
                        color="inherit"
                        size="large"
                        variant="outlined"
                        sx={{ mt: 5 }}
                        onClick={() => window.open('https://app.mescolis.ca/', '_blank')}
                    >
                        {trans('home_benefits_button')}
                    </Button>
                </Stack>
            </Container>

            {/* Modal Implementation */}
            {open && (
                <GetQuoteModal isOpen={open} onClose={handleClose} />
            )}
        </Box>
    );
}

// ----------------------------------------------------------------------

function BenefitItem({ benefit, reverse, index }) {
    const { title, description, iconColor } = benefit;

    return (
        <Stack
            spacing={1}
            direction={{
                xs: 'row',
                md: 'row',
            }}
            sx={{
                ...(reverse && {
                    textAlign: { md: 'left' },
                }),
            }}
        >
            <Box
                sx={{
                    m: 1,
                    width: 16,
                    height: 16,
                    flexShrink: 0,
                    borderRadius: '50%',
                    background: (theme) =>
                        `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                    ...(iconColor === 'secondary' && {
                        background: (theme) =>
                            `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
                    }),
                    ...(iconColor === 'success' && {
                        background: (theme) =>
                            `linear-gradient(to bottom, ${theme.palette.success.light}, ${theme.palette.success.main})`,
                    }),
                }}
            />
            <Stack spacing={1}>
                <Typography variant="h4">
                    {title}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </Stack>

        </Stack>
    );
}

BenefitItem.propTypes = {
    benefit: PropTypes.shape({
        description: PropTypes.string,
        iconColor: PropTypes.string,
        title: PropTypes.string,
    }),
    index: PropTypes.number,
    reverse: PropTypes.bool,
};
