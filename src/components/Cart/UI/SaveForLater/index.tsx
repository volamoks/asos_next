import React, { FC } from 'react';

import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';

import { IItem } from '@/interfaces/asosInterfaces/item';
import { Product } from '@/interfaces/asosInterfaces/Items';
import { IItemsInCartProps } from '../../interfaces';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const SaveForLater: FC<IItemsInCartProps> = ({ item }) => {
    const handleSaveForLater = (item: IItem | Product) => {
        addToFav(item);
    };
    const { addToFav } = useActions();
    const { inFav } = useAppSelector(state => state.asos);

    const isInCart = inFav.findIndex(product => product.id === item.id) >= 0 ? true : false;

    console.log(isInCart);

    const button = !isInCart ? (
        <button
            onClick={() => handleSaveForLater(item)}
            className=" flex border-gray-200 border-2 px-4 min-w-[182px] my-4 self-start aligh-center"
        >
            <AiOutlineHeart className="self-center mr-4" />
            Save for later
        </button>
    ) : (
        <button
            onClick={() => handleSaveForLater(item)}
            className=" flex border-gray-200 border-2 px-4 min-w-[182px] my-4 self-start aligh-center"
        >
            <AiFillHeart className="self-center mr-2" />
            Saved in Favorites
        </button>
    );

    return <>{button}</>;
};

export default SaveForLater;
