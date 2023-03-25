import React, { FC } from 'react';

import Layout from './Layout';

interface ILayoutWrapper {
    children: React.ReactElement;
}

const LayoutWrapper: FC<ILayoutWrapper> = ({ children }) => {
    return (
        <>
            <Layout />

            {children}
        </>
    );
};

export default LayoutWrapper;
