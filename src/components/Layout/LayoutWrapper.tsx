import { FC } from 'react';

import Footer from './Components/Footer';
import Header from './Components/Header';

interface ILayoutWrapper {
    children: React.ReactElement;
}

const LayoutWrapper: FC<ILayoutWrapper> = ({ children }) => {
    return (
        <>
            <Header />

            {children}
            <Footer />
        </>
    );
};

export default LayoutWrapper;
