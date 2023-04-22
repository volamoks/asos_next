import React, { FC } from 'react';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

export interface ISearchInput {
    setOrToggleModel: () => void;
    value: string;
    isSearchModalOpen: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FC<ISearchInput> = ({
    setOrToggleModel,
    value,
    handleChange,
    isSearchModalOpen,
}) => {
    const form = () => (
        <div className="w-full relative">
            <form action="input ">
                <input
                    onClick={setOrToggleModel}
                    onChange={handleChange}
                    placeholder="   Search for items"
                    className={`${
                        isSearchModalOpen ? ' flex' : 'hidden '
                    }  flex xl:flex rounded-3xl xl:w-max-screen-xl  w-full my-1 h-[45px] relative xl:border-2 pl-4`}
                    type="search"
                    value={value}
                />
            </form>
        </div>
    );

    return (
        <div className=" absolute top-10 xl:top-1 left-0 xl:relative w-full xl:flex flex-col z-30">
            {form()}
            {isSearchModalOpen && (
                <button
                    className=" xl:hidden absolute top-3 right-4"
                    onClick={setOrToggleModel}
                >
                    Close
                </button>
            )}
        </div>
    );
};
