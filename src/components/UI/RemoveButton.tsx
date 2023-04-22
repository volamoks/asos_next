import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';
import { TYPES_REDUCER_ACTIONS } from '@/services/reducers/asosReducer';
import { FC, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { IItemIncart } from './AddToCartButton';

interface IRemoveButtonProps {
    item: IItemIncart;
}
const RemoveButton: FC<IRemoveButtonProps> = ({ item }) => {
    const { addToBag } = useActions();

    const { inBag } = useAppSelector(state => state.asos);

    useEffect(() => {}, [inBag]);

    const handleAddToBag = (product: IItemIncart) => {
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
