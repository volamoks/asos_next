import { FC, useState } from 'react';

import ModalCards from './ModalCards';

import { ICategory } from '@/interfaces/asosInterfaces/categories';
import { useAppSelector } from '@/hooks/typedHooks';
import { useGetcategoryQuery } from '@/services/api/asosFetchApi';

const HoverRow: FC = () => {
    const { data } = useGetcategoryQuery('');
    const { storeGen } = useAppSelector(state => state.asos);

    const [isModal, setModal] = useState(false);

    const handleClick = () => {
        setModal(!isModal);
    };

    const num = storeGen === 'MEN' ? 0 : 1;

    if (!data) return <div />;

    const listRow = (
        <ul className="flex  flex-between alighn-center h-full  ">
            {data.navigation[num].children[4].children.map(
                (item, i) =>
                    !item.channelExclusions.includes('webLarge') && (
                        <li
                            key={item.id}
                            className=" text-white group hover:bg-white h-full  hover:text-black flex align-middle"
                        >
                            <div className="mx-3 self-center hover:bg-white hover:cursor-pointer">
                                {item.content.title}
                            </div>

                            <div
                                className="  flex-row group w-full  flex-wrap  hidden group-hover:flex absolute inset-0 top-12"
                                onClick={handleClick}
                            >
                                <ModalCards
                                    items={item.children}
                                    isModal={isModal}
                                />
                            </div>
                        </li>
                    ),
            )}
        </ul>
    );

    return (
        <div className="max-w-screen-xl mx-auto w-full text-center group/item relative flex align-center z-100">
            {listRow}
        </div>
    );
};

export default HoverRow;
