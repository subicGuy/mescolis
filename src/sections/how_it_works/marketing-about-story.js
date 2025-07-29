import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Timeline from '@mui/lab/Timeline';
import Button from '@mui/material/Button';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { useResponsive } from 'src/hooks/use-responsive';

import { useTranslation } from 'src/contexts/TranslationContext';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success', 'primary'];

// ----------------------------------------------------------------------

export default function MarketingAboutStory() {
    const { trans } = useTranslation();

    const mdUp = useResponsive('up', 'md');

    // ----------------------------------------------------------------------

    const TIMELINES = [
        {
            year: trans('p_how_it_works_step_1_subtitle'),
            title: trans('p_how_it_works_step_1_title'),
            description:
                '',
        },
        {
            year: trans('p_how_it_works_step_2_subtitle'),
            title: trans('p_how_it_works_step_2_title'),
            description: trans('p_how_it_works_step_2_description'),
        },
        {
            year: trans('p_how_it_works_step_3_subtitle'),
            title: trans('p_how_it_works_step_3_title'),
            description: trans('p_how_it_works_step_3_description'),
        },
        {
            year: trans('p_how_it_works_step_4_subtitle'),
            title: trans('p_how_it_works_step_4_title'),
            description: trans('p_how_it_works_step_4_description'),
        },
        {
            year: trans('p_how_it_works_step_5_subtitle'),
            title: trans('p_how_it_works_step_5_title'),
            description: trans('p_how_it_works_step_5_description'),
        },
    ];

    return (
        <Box
            sx={{
                bgcolor: 'common.white',
                py: { xs: 10, md: 15 },
            }}
        >
            <Container>
                <Stack
                    spacing={3}
                    sx={{
                        maxWidth: 580,
                        mx: 'auto',
                        textAlign: 'center',
                        mb: { xs: 8, md: 10 },
                    }}
                >
                    <Typography sx={{ color: 'text.secondary' }}>
                        {trans('p_how_it_works_steps_description')}
                    </Typography>

                </Stack>

                <Timeline position={mdUp ? 'alternate' : 'right'}>
                    {TIMELINES.map((value, index) => (
                        <TimelineItem
                            key={value.title}
                            sx={{
                                '&:before': {
                                    ...(!mdUp && { display: 'none' }),
                                },
                            }}
                        >
                            {mdUp && (
                                <TimelineOppositeContent color="text.secondary">
                                    {value.year === trans('p_how_it_works_step_3_subtitle') && (
                                        <Image
                                            alt="vision"
                                            src="/assets/working_process/step3-best-rates.svg"
                                            sx={{ width: '100%' }}
                                        />
                                    )}
                                    {value.year === trans('p_how_it_works_step_5_subtitle') && (
                                        <Image
                                            alt="vision"
                                            src="/assets/working_process/step5-print-your-label.svg"
                                            sx={{ width: '100%' }}
                                        />
                                    )}
                                    {value.year !== trans('p_how_it_works_step_3_subtitle') && value.year !== trans('p_how_it_works_step_5_subtitle') && (
                                       <Typography />
                                    )}
                                </TimelineOppositeContent>
                            )}

                            <TimelineSeparator>
                                <TimelineDot color={COLORS[index]} />
                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>

                                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                                    {value.year}
                                </Typography>

                                <Typography variant="h2" sx={{ mt: 0.5, mb: 1 }}>
                                    {value.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        maxWidth: { md: 420 },
                                        ...(index % 2 && {
                                            ml: 'auto',
                                        }),
                                    }}
                                >
                                    {value.year === trans('p_how_it_works_step_1_subtitle') && (
                                        <Button
                                            color="primary"
                                            size="medium"
                                            variant="contained"
                                            href='https://app.mescolis.ca/auth/api/sign-up/'
                                            sx={{ flexShrink: 0 }}
                                        >
                                            {trans('p_how_it_works_step_1_button')}
                                        </Button>
                                    )}
                                    {value.year === trans('p_how_it_works_step_5_subtitle') && (
                                        <Typography variant="h3" sx={{ color: '#068CED' }}>
                                            {value.description}
                                        </Typography>
                                    )}
                                    {value.year !== trans('p_how_it_works_step_1_subtitle') && value.year !== trans('p_how_it_works_step_5_subtitle') && (
                                        <>
                                            {value.description}
                                        </>
                                    )}
                                </Typography>

                                {!mdUp && (
                                    <Typography>
                                        {value.year === trans('p_how_it_works_step_2_subtitle') && (
                                            <Image
                                                alt="vision"
                                                src="/assets/working_process/step3-best-rates.svg"
                                                sx={{ width: '100%' }}
                                            />
                                        )}
                                        {value.year === trans('p_how_it_works_step_4_subtitle') && (
                                            <Image
                                                alt="vision"
                                                src="/assets/working_process/step5-print-your-label.svg"
                                                sx={{ width: '100%' }}
                                            />
                                        )}
                                        {value.year !== trans('p_how_it_works_step_2_subtitle') && value.year !== trans('p_how_it_works_step_4_subtitle') && (
                                           <Typography />
                                        )}
                                    </Typography>
                                )}

                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
}
