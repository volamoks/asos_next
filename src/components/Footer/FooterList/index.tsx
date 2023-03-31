import { FC } from 'react';

import { Footer } from '@/interfaces/asosInterfaces/categories';

interface IFooterListProps {
    list: Footer;
}
const FooterList: FC<IFooterListProps> = ({ list }) => {
    const listElement = (
        <div
            key={list.id}
            className="flex w-max-screen-xl mx-auto"
        >
            <div className="flex flex-col">
                <div className="text-gray-600 text-base font-bold uppercase pt-8 pb-4">
                    {list.content.title}
                </div>
                {list.children.map(line => (
                    <div
                        key={line.id}
                        className="flex flex-row text-sm text-gray-500 py-1"
                    >
                        {line.content.title}
                    </div>
                ))}
            </div>
        </div>
    );
    return <>{listElement}</>;
};

export default FooterList;
