import { FC, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';

interface ISelectGenderProps {
    hadleOpenSideBar?: () => void;
}
const SelectGenderComponent: FC<ISelectGenderProps> = ({ hadleOpenSideBar }) => {
    const { storeGen: gender } = useAppSelector(state => state.asos);
    const [activeStore, setActiveStore] = useState(gender);
    const { setstoreGen } = useActions();

    const router = useRouter();

    const hadleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setstoreGen(e.currentTarget.innerText);
        router.push('/');
    };

    useEffect(() => {
        hadleOpenSideBar && hadleOpenSideBar();
        setActiveStore(gender);
    }, [gender]);

    const storeGender = ['WOMEN', 'MEN'];

    const genderBtns = (
        <div className="flex justify-between ">
            {storeGender.map(gend => (
                <button
                    key={gend}
                    onClick={hadleClick}
                    className={` flex  my-auto p-4 mx-2 min-w-[150px] justify-center border-b-2 text-xl xl:min-w-[100px] xl:font-bold xl:text-white  xl:active:bg-white ${
                        activeStore === gend ? ' border-b-4 border-gray-500 xl:bg-[#666]  ' : ''
                    }`}
                >
                    {gend}
                </button>
            ))}
        </div>
    );
    return <div className="w-full xl:w-2/3">{genderBtns}</div>;
};

export const getServerSideProps = async () => {
    return {
        props: {},
    };
};

export default SelectGenderComponent;
