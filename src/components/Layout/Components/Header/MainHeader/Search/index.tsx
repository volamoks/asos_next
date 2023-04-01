import React, { FC } from 'react';

export interface IsearchInput {
    setOpen: () => void;
    value: string;
    isModalOpen: boolean;
    setClose: () => void;

    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<IsearchInput> = ({ setOpen, value, handleChange, isModalOpen, setClose }) => {
    const form = isModalOpen && (
        <>
            <form action="input ">
                <input
                    onClick={setOpen}
                    onChange={handleChange}
                    placeholder="   Search for items"
                    className="  flex xl:flex rounded-3xl xl:w-max-screen-xl  w-full my-1 h-[45px] relative xl:border-2 pl-4"
                    type="search"
                    value={value}
                />
            </form>
            <button
                className="absolute top-3 right-4"
                onClick={setClose}
            >
                Close
            </button>
        </>
    );

    return (
        <div className=" absolute top-10 left-0 xl:relative w-full xl:flex flex-col z-30">
            {form}
        </div>
    );
};

export default SearchInput;
