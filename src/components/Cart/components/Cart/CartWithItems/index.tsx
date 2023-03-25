import { useAppSelector } from '@/hooks/typedHooks';
import { FC } from 'react';
import CheckOut from './ChekOut';
import CartItems from '../../ItemsInCartInfo';

const CartWithItems: FC = () => {
    const { inBag: selectedItem } = useAppSelector(state => state.asos);

    const total = selectedItem.reduce((acc, item) => {
        return acc + item?.price?.current.value * item.quantity;
    }, 0);

    const cart = (
        <div className=" bg-gray-200">
            <div className="flex max-w-screen-lg mx-auto min-h-screen ">
                <CartItems
                    items={selectedItem}
                    total={total}
                />
                <CheckOut total={total} />
            </div>
        </div>
    );

    return <div>{cart}</div>;
};

export default CartWithItems;
