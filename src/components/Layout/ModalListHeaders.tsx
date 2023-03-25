import React, { FC } from 'react';
import { Children3 } from '@/interfaces/asosInterfaces/categories';
import { IItems } from '../../interfaces/asosInterfaces/Items';

interface IHeaderModal {
    items: Children3[];
}

const ModalListHeaders: FC<IHeaderModal> = ({ items }) => {
    return (
        <div className="absolute inset-0 z-10">
            <div></div>
            {/* <div className="flex flex-wrap justify-center items-center w-full h-full">
                {items.map(item => (
                    <div
                        key={item.id}
                        className="p-2 mx-2 bg-white text-black rounded cursor-pointer hover:bg-gray-100 transition duration-200"
                    >
                        {item.content.title}
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default ModalListHeaders;
