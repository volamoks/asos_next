import { FC } from 'react';

import { useRouter } from 'next/router';

import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';

const SelectGenderComponent: FC = () => {
    const { storeGen: gender } = useAppSelector(state => state.asos);
    const { setstoreGen } = useActions();

    const router = useRouter();

    const hadleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setstoreGen(e.currentTarget.innerText);
        router.push('/');
    };

    const storeGender = ['WOMEN', 'MEN'];

    const genderBtns = (
        <div className="flex w-full mx-4">
            {storeGender.map(gend => (
                <button
                    key={gend}
                    onClick={hadleClick}
                    className={`flex  my-auto p-4 mx-2 text-xl min-w-[100px] font-bold text-white cursor-pointer active:bg-white ${
                        gender === gend ? 'bg-[#666] ' : ''
                    }`}
                >
                    {gend}
                </button>
            ))}
        </div>
    );
    return <div className="w-2/3">{genderBtns}</div>;
};

export default SelectGenderComponent;
