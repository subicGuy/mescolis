import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';
import { useTranslation } from 'src/contexts/TranslationContext';

import Logo from 'src/components/logo_2';
import Iconify from 'src/components/iconify';
import { NavBasicDesktop } from 'src/components/nav-basic';

import NavMobile from './nav/mobile';
import { langs } from '../config-langs';
import { HEADER } from '../config-layout';
import HeaderShadow from '../common/header-shadow';
import { LanguagePopover } from '../components/language-popover';

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
    const theme = useTheme();
    const { trans, changeLanguage, language } = useTranslation(); // Access language here

    const offset = useOffSetTop();

    const mdUp = useResponsive('up', 'md');

    const renderContent = (
        <>
            <Box sx={{ lineHeight: 0, position: 'relative' }}>
                <Logo isScrolled={offset} />
            </Box>

            <>
                <Stack
                    flexGrow={1}
                    alignItems="end"
                    sx={{
                        // height: 1,
                        display: { xs: 'none', md: 'flex' },
                        mr: 4,
                    }}
                >
                    <NavBasicDesktop
                        slotProps={{
                            rootItem: {
                                '& .icon': { display: 'none' },
                            },
                        }}
                        data={[
                            { title:  trans('home'), path: '/' },
                            {
                                title: trans('how_it_works'),
                                icon: <Iconify icon="solar:home-2-bold-duotone" />,
                                path: '/how-it-works',
                            },
                            { title: trans('our_mission'), path: '/our-mission' },
                            // { title: 'Our Partners', path: '/our-partners' },
                            {
                                title: trans('couriers'),
                                path: '/couriers',
                                icon: <Iconify icon="solar:file-bold-duotone" />,
                                children: [
                                    { title: 'Canada', path: '/couriers/ca' },
                                    { title: 'United States', path: '/couriers/us' },
                                    { title: 'Rest of the World', path: '/couriers/rest-of-the-world' },
                                ],
                            },
                            { title: trans('faq'), path: '/faq' },
                            // {
                            //     title: 'Resources',
                            //     path: '#',
                            //     icon: <Iconify icon="solar:file-bold-duotone" />,
                            //     children: [
                            //         { title: 'Support', path: '#' },
                            //         { title: 'Developers', path: '#' },
                            //         { title: 'Blog', path: '#' },
                            //     ],
                            // },

                        ]}
                    />
                </Stack>

                <Box sx={{ flexGrow: { xs: 1, md: 'unset' } }} />
            </>

            <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">

                <LanguagePopover data={langs} currentlanguage={language} onSelectLanguage={changeLanguage} />

                <Button
                    href='https://app.mescolis.ca/auth/api/sign-in/'
                    variant="outlined"
                    rel="noopener"
                    sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                    }}
                >
                    {trans('sign_in')}
                </Button>

                <Button
                    variant="contained"
                    color="inherit"
                    href='https://app.mescolis.ca/auth/api/sign-up/'
                    rel="noopener"
                    sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                    }}
                >
                    {trans('sign_up')}
                </Button>
            </Stack>

            {!mdUp &&
                <NavMobile
                    data={[
                        { title: trans('home'), path: '/' },
                        {
                            title: trans('how_it_works'),
                            path: '/how-it-works',
                        },
                        { title: trans('our_mission'), path: '/our-mission' },
                        // { title: 'Our Partners', path: '/our-partners' },
                        {
                            title: trans('couriers'),
                            path: '/couriers',
                            children: [
                                { title: 'Canada', path: '/couriers/ca' },
                                { title: 'United States', path: '/couriers/us' },
                                { title: 'Rest of the World', path: '/couriers/rest-of-the-world' },
                            ],
                        },
                        { title: trans('faq'), path: '/faq' },
                    ]}
                />
            }
        </>
    );

    return (
        <AppBar>
            <Toolbar
                disableGutters
                sx={{
                    height: {
                        xs: HEADER.H_MOBILE,
                        md: HEADER.H_DESKTOP,
                    },
                    transition: theme.transitions.create(['height', 'background-color'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                    ...(headerOnDark && {
                        color: 'common.white',
                    }),
                    ...(offset && {
                        ...bgBlur({ color: theme.palette.background.default }),
                        color: 'text.primary',
                        height: {
                            md: HEADER.H_DESKTOP - 16,
                        },
                    }),
                }}
            >
                <Container
                    sx={{
                        height: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {renderContent}
                </Container>
            </Toolbar>

            {offset && <HeaderShadow />}
        </AppBar>
    );
}

Header.propTypes = {
    headerOnDark: PropTypes.bool,
};
