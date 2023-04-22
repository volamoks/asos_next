import LayoutWrapper from '@/components/Layout/LayoutWrapper';
import { store } from '@/services/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Jost } from 'next/font/google';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/services/store/store';
import { StrictMode } from 'react';

const jost = Jost({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <StrictMode>
            <main className={jost.className}>
                <Provider store={store}>
                    <PersistGate
                        loading={null}
                        persistor={persistor}
                    >
                        <LayoutWrapper>
                            <Component {...pageProps} />
                        </LayoutWrapper>
                    </PersistGate>
                </Provider>
            </main>
        </StrictMode>
    );
}
