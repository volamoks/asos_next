import React, { FC } from 'react';

interface IExpendableBtnProps {
    handleClick: () => void;
    isActive: boolean;
}
const ExpendableBtn: FC<IExpendableBtnProps> = ({ isActive, handleClick }) => {
    return (
        <button onClick={handleClick}>
            <svg
                className="w-5 h-5 right-1 top-2 absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
            <svg
                className={`"w-5 h-5 right-[5px] top-[9px] absolute " + ${
                    isActive
                        ? 'rotate-0 transition duration-300'
                        : 'rotate-90 transition duration-300'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
        </button>
    );
};

export default ExpendableBtn;
