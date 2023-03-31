import { FC, useState } from 'react';

import { useRouter } from 'next/router';
import { useGetcategoryQuery } from '@/services/api/asosFetchApi';

import CircleList from '@/components/Header/SecondHeader/HoverRow/ModalCards/ModalContains/CircleList';
import ThreeCards from '@/components/Header/SecondHeader/HoverRow/ModalCards/ModalContains/ThreeCards';

import { AiOutlineClose } from 'react-icons/ai';
import { IoArrowBack } from 'react-icons/io5';

interface ISideBarProps {
    hadleOpenSideBar: () => void;
    isSideBar: boolean;
}
const SideBar: FC<ISideBarProps> = ({ hadleOpenSideBar, isSideBar }) => {
    const router = useRouter();
    const { data } = useGetcategoryQuery('');

    const [categoryIndex, setCategoryIndex] = useState(0);
    const [secodSideBar, setSecodSideBar] = useState(false);

    const handleSetIndex = (id: number | undefined) => {
        if (id) setCategoryIndex(id);
        setSecodSideBar(true);
    };

    const handleSetSecondSideBar = () => {
        hadleOpenSideBar();
    };

    const hadleGotoPage = (id: number | undefined) => {
        router.push(`/items/${id}`);
        hadleOpenSideBar();
    };

    const sideElems = data?.navigation[0].children.slice(0, 5).map(item => (
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
                >
                    <CircleList
                        item={item.children}
                        type={'circleImageListLarge'}
                        hadleGotoPage={hadleGotoPage}
                    />
                </div>
            ))}
        </div>
    );

    const buttons = (
        <div className="flex">
            <button
                onClick={handleSetSecondSideBar}
                className={`${!secodSideBar ? 'hidden' : 'self-start'}`}
            >
                <IoArrowBack size={25} />
            </button>
            <button
                className="self-end"
                onClick={hadleOpenSideBar}
            >
                <AiOutlineClose size={25} />
            </button>
        </div>
    );

    return (
        <div
            // onClick={hadleOpenSideBar}
            className={`fixed inset-0 bg-black/70 z-50 ${isSideBar ? '' : 'pointer-events-none'}`}
        >
            <div className="flex-col l bg-white px-4 z-50 absolute  transition-all  translate-x-0 w-auto  min-w-[383px]">
                {buttons}
                <div className="mt-12"> {!secodSideBar ? sideElems : circleList}</div>
            </div>
        </div>
    );
};

export default SideBar;
