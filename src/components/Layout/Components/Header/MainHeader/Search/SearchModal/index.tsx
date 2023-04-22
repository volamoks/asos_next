import React, { FC } from 'react';

import { nanoid } from '@reduxjs/toolkit';

import { toCamelCase } from '../../../utils/toCamelCase';

import { useGetSearchItemsQuery } from '@/services/api/asosFetchApi';
import { Spinner } from '@/components/UI/Spinner';

interface ISearchModalProps {
    isSearchModalOpen: boolean;
    value: string;
}

export const SearchModal: FC<ISearchModalProps> = ({ value, isSearchModalOpen }) => {
    const { data, isLoading, isError } = useGetSearchItemsQuery(value);

    const searchList = () => {
        if (isLoading) return <Spinner />;
        if (isError) return <div>There is no items...</div>;

        return data?.suggestionGroups[0].suggestions.map(item => (
            <ul key={nanoid()}>
                <li className="flex flex-row justify-between py-2 xl:py-2">
                    <span>{toCamelCase(item.searchTerm)}</span>
                    <span>{item.numberOfResults} items</span>
                </li>
            </ul>
        ));
    };

    const modal = () => {
        if (!isSearchModalOpen) return <></>;

        return (
            <>
                <div
                    className="bg-gray-200  top-0 left-0  w-screen h-screen absolute  xl:bg-white
                                    z-20 p-4  pt-28 xl:py-2 xl:-top-4 xl:h-[420px] xl:w-full"
                >
                    {searchList()}
                </div>
            </>
        );
    };

    return <div className="xl:relative">{modal()}</div>;
};
