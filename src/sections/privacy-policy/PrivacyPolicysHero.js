

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import { useTranslation } from 'src/contexts/TranslationContext';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export default function PrivacyPolicysHero() {
    const { trans } = useTranslation();

    const theme = useTheme();

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
                            { name: trans('p_our_mission_nav_home_text'), href: '/' },
                            { name: trans('p_privacy_policy_nav_text') },
                        ]}
                        sx={{
                            mb: { xs: 5, md: 8 },
                            '& a': {
                                color: 'common.white',
                            },
                            mx: 'auto',
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
                                {trans('p_privacy_policy_hero_title')}
                            </Typography>
                        </Stack>
                    </Stack>

                </Container>
            </Box>

      
    );
}


