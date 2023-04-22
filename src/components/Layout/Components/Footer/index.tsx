import { FC, useMemo } from 'react';

import { useGetCategoryQuery } from '@/services/api/asosFetchApi';
import { Spinner } from '@/components/UI/Spinner';

export const Footer = () => {
    const { data, isLoading, isError } = useGetCategoryQuery('');

    const columnElement = useMemo(
        () =>
            data?.footer.map(column => (
                <div
                    key={column.id}
                    className="flex w-max-screen-xl mx-auto"
                >
                    <div className="flex flex-col">
                        <h2 className="text-gray-600 text-base font-bold uppercase pt-8 pb-4">
                            {column.content.title}
                        </h2>
                        {column.children.map(line => (
                            <div
                                key={line.id}
                                className="flex flex-row text-sm text-gray-500 py-1"
                            >
                                {line.content.title}
                            </div>
                        ))}
                    </div>
                </div>
            )),
        [data],
    );

    if (isLoading) return <Spinner />;
    if (isError) return <div>Something went wrong</div>;

    const footerElement = (
        <footer className=" bg-gray-300 min-h-12 w-full mx-auto">
            <div className="hidden md:flex justify-around max-w-screen-xl  h-[300px] mx-auto">
                {columnElement}
                <div className="text-gray-600 text-base font-bold mt-6 uppercase w-1/4  text-center">
                    Shipping from
                </div>
            </div>

            <div className=" bg-gray-200 py-4 pl-[110px] w-full h-[50px] text-sm text-gray-500 text-start">
                ©2023
            </div>
        </footer>
    );
    return <>{footerElement}</>;
};

export default Footer;
