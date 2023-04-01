import { FC } from 'react';
import { IModalListHeadersProps } from '../../../interfaces';

import ModalContains from './ModalContains';

const ModalListHeaders: FC<IModalListHeadersProps> = ({ items }) => {
    const modalRowItems = (
        <div className="flex z-50 flex-wrap justify-around items-start text-left w-full   bg-gray-100 ">
            {items.map(
                item =>
                    !item.channelExclusions.includes('webLarge') && (
                        <div
                            key={item.id}
                            className="p-2 mx-2 flex flex-col justify-around w-1/5"
                        >
                            <h2 className=" text-black text-lg font-bold underline uppercase">
                                {item.content.title}
                            </h2>

                            <ModalContains
                                item={item.children}
                                type={item.display.webLargeTemplateName}
                            />
                        </div>
                    ),
            )}
        </div>
    );
    return <div className=" inset-0 z-50 flex justify-around top-10 w-full ">{modalRowItems}</div>;
};

export default ModalListHeaders;
