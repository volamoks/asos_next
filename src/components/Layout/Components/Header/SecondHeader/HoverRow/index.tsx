import { FC, useState } from 'react';

import ModalCards from './ModalCards';

import { useAppSelector } from '@/hooks/typedHooks';
import { useGetCategoryQuery } from '@/services/api/asosFetchApi';
import { useSetModal } from '@/hooks/useToggleModal';
import Spinner from 'react-spinner-material';

export const HoverRow: FC = () => {
    const { data, isLoading } = useGetCategoryQuery('');
    const storeGen = useAppSelector(state => state.asos.storeGen);

    const { isModal, toggleModal } = useSetModal();
    if (!data) return <div />;
    if (isLoading) return <Spinner />;

    const num = storeGen === 'MEN' ? 0 : 1;
    const mainNavCategories = data.navigation[num].children[4].children;

    const listRow = mainNavCategories.map(
        item =>
            !item.channelExclusions.includes('webLarge') && (
                <>
                    <li
                        key={item.id}
                        className=" text-white group hover:bg-white h-full  hover:text-black flex align-middle transition-all"
                    >
                        <div className="mx-3 self-center hover:bg-white hover:cursor-pointer transition-all">
                            {item.content.title}
                        </div>

                        <div
                            className="  flex-row group w-full flex-wrap  hidden group-hover:flex absolute inset-0 top-12"
                            onClick={toggleModal}
                        >
                            <ModalCards
                                items={item.children}
                                isModal={isModal}
                            />
                        </div>
                    </li>
                </>
            ),
    );

    return (
        <div className="max-w-screen-xl mx-auto w-full text-center group/item relative flex align-center z-100">
            <ul className="hidden xl:flex  flex-between align-center h-full ">{listRow}</ul>
        </div>
    );
};

export default HoverRow;
