import { useAppSelector } from '@/hooks/typedHooks';
import { FC, useEffect, useState } from 'react';
import CheckOut from './ChekOut';
import CartItems from '../../ItemsInCartInfo';
import { getLocatStorage } from '@/components/Cart/utilities/localStorage';
import { useGetItemQuery } from '@/services/api/asosFetchApi';
import { IItemIncart } from '@/components/UI/AddToCartButton';

const CartWithItems: FC = () => {
    const { inBag } = useAppSelector(state => state.asos);

    const [item, setItem] = useState<IItemIncart[]>([]);

    useEffect(() => {
        const selectedItem = getLocatStorage('inCart');

        setItem(selectedItem);
    }, [inBag]);

    const total = item.reduce(
        (acc, item) =>
            item.quantity
                ? acc + item.price.current.value * item.quantity
                : acc + item.price.current.value,
        0,
    );

    const cart = (
        <div className=" bg-gray-200">
            <div className="flex max-w-screen-lg mx-auto min-h-screen ">
                <CartItems
                    items={item}
                    total={total}
                />
                <CheckOut total={total} />
            </div>
        </div>
    );

    return <div>{cart}</div>;
};

export default CartWithItems;
