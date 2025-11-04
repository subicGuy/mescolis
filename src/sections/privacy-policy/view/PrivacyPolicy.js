'use client';

import { useEffect } from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { SplashScreen } from 'src/components/loading-screen';
import PrivacyPolicysHero from '../PrivacyPolicysHero';
import PrivacyPolicyBody from '../privacy-policy-body';

// ----------------------------------------------------------------------


export default function PrivacyPolicy() {

    const loading = useBoolean(true);

    useEffect(() => {
        const fakeLoading = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            loading.onFalse();
        };
        fakeLoading();
    }, [loading]);

    if (loading.value) {
        return <SplashScreen />;
    }

    return (
        <>
            <PrivacyPolicysHero />
            <PrivacyPolicyBody />
        </>
    );
}
