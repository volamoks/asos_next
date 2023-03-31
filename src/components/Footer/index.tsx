import { FC } from 'react';

import { useGetcategoryQuery } from '@/services/api/asosFetchApi';

import FooterList from './FooterList';

const Footer: FC = () => {
    const { data } = useGetcategoryQuery('');

    const shipping = (
        <div className="text-gray-600 text-base font-bold mt-6 uppercase w-1/4  text-center">
            Shipping from
        </div>
    );

    const footerElement = (
        <>
            <div className="hidden xl:flex justify-around max-w-screen-xl  mx-auto">
                {data?.footer.map(item => (
                    <div key={item.id}>
                        <FooterList list={item} />
                    </div>
                ))}
                {shipping}
            </div>

            <div className=" bg-gray-200 py-4 pl-[110px] w-full h-12 text-sm text-gray-500 text-start">
                ©2023
            </div>
        </>
    );
    return <footer className=" bg-gray-100 min-h-12 w-full mx-auto">{footerElement}</footer>;
};

export default Footer;
