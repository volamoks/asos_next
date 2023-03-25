import { useGetLocalCategoryQuery } from '@/services/api/localServerApi';
import React from 'react';
import FooterList from './FooterList';

const Footer = () => {
    const { data } = useGetLocalCategoryQuery('');

    const shipping = (
        <div className="text-gray-600 text-base font-bold mt-6 uppercase w-1/4  text-center">
            Shipping from
        </div>
    );

    const footerElement = (
        <>
            <div className="flex justify-around max-w-screen-xl  mx-auto">
                {data?.footer.map(item => (
                    <div key={item.id}>
                        <FooterList list={item} />
                    </div>
                ))}
            </div>
            {shipping}
            <div className=" bg-gray-200 py-4 pl-[110px] w-full text-sm text-gray-500">©2023</div>
        </>
    );
    return <footer className=" bg-gray-100 w-full mx-auto">{footerElement}</footer>;
};

export default Footer;
