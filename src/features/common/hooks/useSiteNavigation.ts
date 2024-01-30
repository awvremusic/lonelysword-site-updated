import { useRouter } from 'next/navigation';

export const useSiteNavigation = () => {
    const router = useRouter();

    const navigateToBio = () => {
        router.push('/bio');
    };

    const navigateToHome = () => {
        router.push('/');
    };

    const navigateToMusic = () => {
        router.push('/music');
    };

    return {
        navigateToBio,
        navigateToHome,
        navigateToMusic,
    };
}