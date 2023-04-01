import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';
import { TYPES_REDUCER_ACTIONS } from '@/services/reducers/asosReducer';
import { FC, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { setToLocalStorage } from '../Cart/utilities/localStorage';
import { IItemIncart } from './AddToCartButton';

interface IRemoveButtonProps {
    item: IItemIncart;
}
const RemoveButton: FC<IRemoveButtonProps> = ({ item }) => {
    const { addToBag } = useActions();

    const { inBag } = useAppSelector(state => state.asos);

    useEffect(() => {
        // setToLocalStorage(TYPES_REDUCER_ACTIONS.IN_CART, inBag);
    }, [inBag]);

    const handleAddToBag = (product: IItemIncart) => {
        // setToLocalStorage(TYPES_REDUCER_ACTIONS.IN_CART, inBag);
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
