import React, { FC } from 'react';

import { nanoid } from '@reduxjs/toolkit';

import { ISearcModalProps } from '@/components/Header/interfaces';
import { toCamelCase } from '@/components/Header/utils/toCamelCase';
import { useRouter } from 'next/router';

const SearcModal: FC<ISearcModalProps> = ({ isModalOpen, data, setClose }) => {
    const router = useRouter();
    const hadleGoToPage = () => {
        router.push(`/items/`);
    };

    const modal = isModalOpen ? (
        <div className="z-20 relative ">
            <div className="bg-gray-200 -top-16 xl:bg-white w-full  absolute xl:-top-6 z-10 p-4 pt-24 xl:p-6 h-screen">
                <div className="">
                    {data?.suggestionGroups[0].suggestions.map(item => (
                        <ul key={nanoid()}>
                            <li
                                onClick={() => hadleGoToPage()}
                                className="flex flex-row justify-between py-2 xl:py-2"
                            >
                                <span>{toCamelCase(item.searchTerm)}</span>
                                <span>{item.numberOfResults}</span>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
            <div
                onClick={setClose}
                className="xl:bg-black/50 w-screen h-screen absolute -left-[600px]"
            ></div>
        </div>
    ) : (
        <div />
    );

    return <>{modal}</>;
};

export default SearcModal;
