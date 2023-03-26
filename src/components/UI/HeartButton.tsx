import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';
import { IItem } from '@/interfaces/asosInterfaces/item';
import { Product } from '@/interfaces/asosInterfaces/Items';

import React, { FC, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { setToLocalStorage } from '../Cart/utilities/localStorage';

interface heartBtnProps {
    size?: string;
    item: Product | IItem;
}

const HeartButton: FC<heartBtnProps> = ({ size = '25px', item }) => {
    const { addToFav } = useActions();
    const { inFav, inBag } = useAppSelector(state => state.asos);

    const isActive = inFav.findIndex(product => product.id === item.id) >= 0 ? true : false;

    useEffect(() => {
        setToLocalStorage('inFav', inFav);
    }, [inFav]);

    const handleAddToFav = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
        e.stopPropagation();
        addToFav(item);
    };
    const element = !isActive ? (
        <AiOutlineHeart
            size={size}
            className="self-center mx-auto"
        />
    ) : (
        <AiFillHeart
            size={size}
            className="self-center mx-auto"
        />
    );

    return (
        <button
            onClick={e => handleAddToFav(e)}
            className=" rounded-3xl h-10 w-10 bg-gray-300/80 self-center ml-5 flex align-center z-50"
        >
            {element}
        </button>
    );
};

export default HeartButton;
