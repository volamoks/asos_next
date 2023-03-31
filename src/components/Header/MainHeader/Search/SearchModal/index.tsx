import React, { FC } from 'react';

import { nanoid } from '@reduxjs/toolkit';

import { ISearcModalProps } from '@/components/Header/interfaces';
import { toCamelCase } from '@/components/Header/utils/toCamelCase';

const SearcModal: FC<ISearcModalProps> = ({ isOpen, data, setClose }) => {
    const modal = isOpen ? (
        <>
            <div className="bg-white w-full  absolute -top-6 z-10 p-6">
                <div className="">
                    {data?.suggestionGroups[0].suggestions.map(item => (
                        <div key={nanoid()}>
                            <div className="flex flex-row justify-between py-2">
                                <div>{toCamelCase(item.searchTerm)}</div>
                                <div>{item.numberOfResults}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                onClick={setClose}
                className="bg-black/50 w-screen h-screen absolute -left-[600px]"
            ></div>
        </>
    ) : (
        <div />
    );

    return <div className="z-20 relative ">{modal}</div>;
};

export default SearcModal;
