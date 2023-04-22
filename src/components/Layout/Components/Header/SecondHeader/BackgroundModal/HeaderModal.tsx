import { Children3 } from '@/interfaces/asosInterfaces/categories';
import { FC } from 'react';

interface IHeaderModal {
    items: Children3[];
    i: number;
}

const HeaderModal: FC<IHeaderModal> = ({ items, i }) => {
    const item = items[i];
    return (
        <div className=" max-w-screen-xl mx-auto ">
            <div
                key={item.id}
                className=" text-black bg-red-200 "
            >
                <div className="flex flex-row flex-between ">{item.content.title}</div>
            </div>
        </div>
    );
};

export default HeaderModal;
