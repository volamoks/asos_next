import { FC } from 'react';
import { StringLiteralType } from 'typescript';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useActions } from '@/hooks/combineActions';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

interface IFilterBtnProps {
    filter: string[];
    i: number;
    clearFilter: ActionCreatorWithPayload<string, 'asos/setFilter'>;
}

const FilterButtons: FC<IFilterBtnProps> = ({ filter, i, clearFilter }) => {
    const handleClose = (filter: string) => {
        clearFilter(filter);
    };
    return (
        <div className="flex bg-gray-100 border border-gray-100 rounded-lg p-3 m-2">
            <div className="">{filter[i]}</div>

            <div
                onClick={() => handleClose(filter[i])}
                className="self-center pl-4"
            >
                <AiOutlineCloseCircle size={18} />
            </div>
        </div>
    );
};

export default FilterButtons;
