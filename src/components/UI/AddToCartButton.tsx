import React, { FC } from 'react';

import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';

import { IItem } from '@/interfaces/asosInterfaces/item';

export interface IItemIncart extends IItem {
    size: string | undefined;
    quantity: number | undefined;
}

interface IAddToCartButtonProps {
    item: IItemIncart;
}

const AddToCartButton: FC<IAddToCartButtonProps> = ({ item }) => {
    const { addToBag } = useActions();
    const { inBag } = useAppSelector(state => state.asos);

    const handleAddToBag = () => {
        addToBag(item);
    };

    const isInBag = inBag.findIndex(product => product.id === item.id) >= 0 ? true : false;

    return (
        <button
            onClick={handleAddToBag}
            className="w-4/5 bg-green-600 p-3 text-white font-bold uppercase hover:bg-green-700"
        >
            {!isInBag ? 'Add to bag' : 'Remove item'}
        </button>
    );
};

export default AddToCartButton;
