import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'src/contexts/TranslationContext';


// ----------------------------------------------------------------------

export default function PrivacyPolicyBody() {
   const { trans } = useTranslation();

   return (
      <Container
         sx={{
            overflow: 'hidden',
            py: 10,
         }}
      >
         <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            sx={{
               textAlign: { xs: 'center', md: 'left' },
            }}
         >

            <Grid>
               <Typography variant="h3" sx={{ mb: 3 }}>
                  {trans('h_privacy_policy_introduction')}
               </Typography>

               <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  {trans('p_privacy_policy_introduction')}
               </Typography>

               <Typography variant="h3" sx={{ mb: 3 }}>
                  {trans('h_privacy_policy_services')}
               </Typography>

               <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  {trans('p_privacy_policy_services')}
               </Typography>

               <Typography variant="h3" sx={{ mb: 3 }}>
                  {trans('h_privacy_policy_account_registration')}
               </Typography>

               <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  {trans('p_privacy_policy_account_registration')}
               </Typography>

               <Typography variant="h3" sx={{ mb: 3 }}>
                  {trans('h_privacy_policy_payment_billing')}
               </Typography>

               <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  {trans('p_privacy_policy_payment_billing')}
               </Typography>

               <Typography variant="h3" sx={{ mb: 3 }}>
                  {trans('h_privacy_policy_price_adjustment')}
               </Typography>

               <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  {trans('p_privacy_policy_price_adjustment')}
               </Typography>

               <Typography variant="h3" sx={{ mb: 3 }}>
                  {trans('h_privacy_policy_refund_policy')}
               </Typography>

               <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  {trans('p_privacy_policy_refund_policy')}
               </Typography>

               <Typography variant="h3" sx={{ mb: 3 }}>
                  {trans('h_privacy_policy_carrier_responsibility')}
               </Typography>

               <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  {trans('p_privacy_policy_carrier_responsibility')}
               </Typography>

               <Typography variant="h3" sx={{ mb: 3 }}>
                  {trans('h_privacy_policy_account_termination')}
               </Typography>

               <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  {trans('p_privacy_policy_account_termination')}
               </Typography>

               <Typography variant="h3" sx={{ mb: 3 }}>
                  {trans('h_privacy_policy_communication_promotion')}
               </Typography>

               <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  {trans('p_privacy_policy_communication_promotion')}
               </Typography>

               <Typography variant="h3" sx={{ mb: 3 }}>
                  {trans('h_privacy_policy_governemtn_law')}
               </Typography>

               <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  {trans('p_privacy_policy_governemtn_law')}
               </Typography>

               <Typography variant="h3" sx={{ mb: 3 }}>
                  {trans('h_privacy_policy_contact')}
               </Typography>

               <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  {trans('p_privacy_policy_contact')}{' '}
                  <Typography
                     component="a"
                     href="mailto:accounts@mescolis.ca"
                     sx={{
                        color: '#068CED',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                     }}
                  >
                     accounts@mescolis.ca
                  </Typography>
               </Typography>
            </Grid>
         </Grid>

         {/* <Grid
                container
                columnSpacing={{ xs: 0, md: 3 }}
                rowSpacing={{ xs: 5, md: 0 }}
                justifyContent="space-between"
            >
                <Grid
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Image
                        src="/assets/our-missions/great_place_work.png"
                        alt="Logo CCA"
                        sx={{
                            height: { xs: 200, md: 200 },
                        }}
                    />
                </Grid>

                <Grid xs={12} sm={9} md={10}>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                        {trans('p_our_mission_about_title_2')}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        {trans('p_our_mission_about_description_4')}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        {trans('p_our_mission_about_description_5')}
                    </Typography>
                </Grid>
            </Grid> */}
      </Container>
   );
}
