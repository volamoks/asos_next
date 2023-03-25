import { FC } from 'react';

import Footer from '../Footer';
import Header from '../Header';

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
