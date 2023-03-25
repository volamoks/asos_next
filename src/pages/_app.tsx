import LayoutWrapper from '@/components/Layout/LayoutWrapper';
import { store } from '@/services/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <LayoutWrapper>
                <Component {...pageProps} />
            </LayoutWrapper>
        </Provider>
    );
}
