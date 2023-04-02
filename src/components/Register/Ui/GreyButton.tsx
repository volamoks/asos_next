import React, { FC } from 'react';

export interface IButtonProps {
    buttonName: string;
    handleSubmit: () => void;
}

const GreyButton: FC<IButtonProps> = ({ buttonName, handleSubmit }) => {
    return (
        <>
            <button
                onClick={handleSubmit}
                className="bg-gray-500 w-[200px] self-center text-white font-bold py-2"
            >
                {buttonName}
            </button>
        </>
    );
};

export default GreyButton;
