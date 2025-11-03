import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { useTabs } from 'src/hooks/use-tabs';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';
import { textGradient } from 'src/theme/styles';
import { useTranslation } from 'src/contexts/TranslationContext';
import CareerHeroIllustration from 'src/assets/illustrations/career-hero-illustration';

import { CustomTabs } from 'src/components/custom-tabs';

import MarketingContactForm from './marketing-contact-form';

// ----------------------------------------------------------------------

export default function CareerLandingHero() {
    const theme = useTheme();
    const tabs = useTabs('package');
    const mdUp = useResponsive('up', 'md');

    const { trans } = useTranslation();

    const TABS = [
        { value: 'package', label: trans('home_hero_tab_package') },
        { value: 'envelope', label: trans('home_hero_tab_envelope') },
        { value: 'ltl_freight', label: trans('home_hero_tab_ltl_freight') },
    ];

    const renderFilters = (
        <Stack
            spacing={{ xs: 1, md: 0 }}
            direction={{ xs: 'column', md: 'row' }}
            sx={{
                p: { xs: 1, md: 2 },
                borderRadius: 1,
                bgcolor: 'common.white',
                alignItems: { md: 'center' },
                justifyContent: { md: 'center' },
                marginTop: 1,
            }}
        >
            <MarketingContactForm />
        </Stack>
    );


    const renderTabs = (
        <CustomTabs
            value={tabs.value}
            onChange={tabs.onChange}
            variant="fullWidth"
            slotProps={{ tab: { px: 0 } }}
            sx={{
                fontWeight: 400,
                borderRadius: 1,
                marginTop: 2,
                marginBottom: 1,
                '& .Mui-selected': {
                    color: 'white',
                },
            }}
        >
            {TABS.map((tab) => (
                <Tab key={tab.value} value={tab.value} label={tab.label} sx={{ fontWeight: 400 }} />
            ))}
        </CustomTabs>
    );


    return (
        <Box
            sx={{
                ...bgGradient({
                    color: mdUp
                        ? alpha(theme.palette.grey[900], 0.8) // Darker color on larger screens
                        : alpha(theme.palette.grey[400], 0.4), // Lighter color on mobile
                    imgUrl: '/assets/background/overlay_2.jpg',
                }),
                pt: 15,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
                pb: { xs: 10, md: 15 },
                display: { md: 'flex' },
                minHeight: { md: '100vh' },
            }}
        >
            <Container>
                <Grid container spacing={3} justifyContent="space-between">
                    <Grid xs={12} md={5} lg={4}>
                        <Stack
                            spacing={5}
                            sx={{
                                textAlign: { xs: 'center', md: 'unset' },
                            }}
                        >
                            <Stack sx={{}}>
                                <Typography variant="h1" sx={{ color: 'primary.main' }}>
                                    <Box
                                        component="span"
                                        sx={{
                                            ...textGradient(
                                                `90deg, #078DEE 20%, #FFA03F 100%`
                                            ),
                                        }}
                                    >
                                        MesColis
                                    </Box>
                                </Typography>
                                <Typography variant="h3" sx={{ color: 'common.white' }}>
                                    {trans('home_hero_subtitle')}
                                </Typography>
                                <Typography variant="h4" sx={{ color: 'lightgray' }}>
                                    {trans('home_hero_discount_text')}
                                </Typography>
                                
                                {renderTabs}
                                {renderFilters}

                                {/* Show button only on mobile */}
                                {!mdUp && (
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="inherit"
                                        href='https://app.mescolis.ca/auth/api/sign-up/'
                                        rel="noopener"
                                        sx={{ mt: 2,py: 1.5, }}
                                    >
                                        {trans('sign_up')}
                                    </Button>
                                )}



                            </Stack>

                            {/* {renderBrands} */}

                            {/* {renderSummary} */}
                        </Stack>
                    </Grid>

                    {mdUp && (
                        <Grid xs={12} md={6} lg={6}>
                            <CareerHeroIllustration />
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Box >
    );
}
