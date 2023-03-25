import LayoutWrapper from '@/components/Layout/LayoutWrapper';
import { store } from '@/services/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Jost } from '@next/font/google';

const jost = Jost({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={jost.className}>
            <Provider store={store}>
                <LayoutWrapper>
                    <Component {...pageProps} />
                </LayoutWrapper>
            </Provider>
        </main>
    );
}
