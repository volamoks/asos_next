import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IItemIncart } from './AddToCartButton';

interface IRemoveButtonProps {
    item: IItemIncart;
}
const RemoveButton = ({ item }) => {
    const { addToBag } = useActions();

    const handleAddToBag = product => {
        addToBag(product);
    };
    return (
        <>
            <AiOutlineClose
                onClick={() => handleAddToBag(item)}
                className="absolute right-4 top-12 cursor-pointer"
                size={26}
            />
        </>
    );
};

export default RemoveButton;
