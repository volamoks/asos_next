import { useRouter } from 'next/router';

export const useGoToPage = (url: string) => {
    const router = useRouter();

    const goToPage = () => {
        router.push(url);
    };
};
