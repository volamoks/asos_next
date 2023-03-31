import { useAppSelector } from '@/hooks/typedHooks';
import { FC, useEffect, useState } from 'react';
import CheckOut from './ChekOut';
import CartItems from '../../ItemsInCartInfo';
import { IItemIncart } from '@/components/UI/AddToCartButton';
import ViewAll from '../../ItemsInCartInfo/ViewAll/ViewAll';

const CartWithItems: FC = () => {
    const { inBag } = useAppSelector(state => state.asos);
    const [item, setItem] = useState<IItemIncart[]>([]);

    useEffect(() => {
        setItem(inBag);
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
            <div className="flex flex-col xl:flex-cols-2 max-w-screen-lg mx-auto min-h-screen ">
                <div className="xl:flex">
                    <CartItems
                        items={item}
                        total={total}
                    />
                    <CheckOut total={total} />
                </div>

                <ViewAll />
            </div>
        </div>
    );

    return <div>{cart}</div>;
};

export default CartWithItems;
