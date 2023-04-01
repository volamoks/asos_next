import { FC, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useGetcategoryQuery } from '@/services/api/asosFetchApi';

import CircleList from '../../../SecondHeader/HoverRow/ModalCards/ModalContains/CircleList';
import ThreeCards from '../../../SecondHeader/HoverRow/ModalCards/ModalContains/ThreeCards';

import { AiOutlineClose } from 'react-icons/ai';
import { IoArrowBack } from 'react-icons/io5';
import SelectGenderComponent from '../../SelectGender';
import { useAppSelector } from '@/hooks/typedHooks';

interface ISideBarProps {
    handleOpenSideBar: () => void;
    handleCloseSideBar: () => void;
    setIsSecondBar: (arg0: boolean) => void;
    isSecondBar: boolean;
    isSideBar: boolean;
}
const SideBar: FC<ISideBarProps> = ({
    handleOpenSideBar,
    handleCloseSideBar,
    isSideBar,
    isSecondBar,
    setIsSecondBar,
}) => {
    const router = useRouter();
    const { data } = useGetcategoryQuery('');

    const { storeGen } = useAppSelector(state => state.asos);
    const [categoryIndex, setCategoryIndex] = useState(0);

    const index = storeGen === 'MEN' ? 0 : 1;

    const handleSetIndex = (id: number | undefined) => {
        if (id) setCategoryIndex(id);
        setIsSecondBar(!isSecondBar);
    };

    const handleSetSecondSideBar = () => {
        handleOpenSideBar();
    };

    const handleGotoPage = (id: number | undefined) => {
        router.push(`/items/${id}`);
        handleOpenSideBar();
    };

    useEffect(() => {
        if (isSideBar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isSideBar]);

    const sideElems = data?.navigation[index].children.slice(0, 5).map(item => (
        <div
            className="mb-4"
            key={item.id}
        >
            <ThreeCards
                item={item.children}
                type={'thirdMarketingImage'}
                hadleGotoPage={handleSetIndex}
            />
        </div>
    ));

    const circleList = (
        <div>
            {data?.navigation[0].children[4].children[categoryIndex].children.map(item => (
                <div
                    className=""
                    key={item.id}
                    onClick={handleCloseSideBar}
                >
                    <CircleList
                        item={item.children}
                        type={'circleImageListLarge'}
                        hadleGotoPage={handleGotoPage}
                    />
                </div>
            ))}
        </div>
    );

    const buttons = (
        <div className="flex justify-between mt-2">
            <button
                onClick={handleSetSecondSideBar}
                className={`${!isSecondBar ? 'hidden' : 'self-start'}`}
            >
                <IoArrowBack size={30} />
            </button>
            <button
                className="self-end"
                onClick={handleCloseSideBar}
            >
                <AiOutlineClose size={30} />
            </button>
        </div>
    );

    return (
        <>
            <div
                onClick={handleOpenSideBar}
                className={`fixed inset-0 bg-black/80 z-50 ${
                    isSideBar ? '' : 'pointer-events-none'
                }`}
            ></div>
            <div className="sidebar flex-col top-0 bg-white px-4 z-50 absolute transition-all translate-x-0 w-auto min-w-[383px] h-screen overflow-y-auto">
                {buttons}
                <SelectGenderComponent hadleOpenSideBar={handleOpenSideBar} />
                <div className="h-auto overflow-y-auto">
                    {!isSecondBar ? sideElems : circleList}
                </div>
            </div>
        </>
    );
};

export default SideBar;
