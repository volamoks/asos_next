import { useAppSelector } from '@/hooks/typedHooks';
import React from 'react';
import CartWithItems from './CartWithItems';
import EmptyBag from './EmptyCArt/EmptyBag';

const Cart = () => {
    const { inBag } = useAppSelector(state => state.asos);

    const cart =
        inBag.length > 0 ? (
            <div>
                <CartWithItems />
            </div>
        ) : (
            <div>
                <EmptyBag />
            </div>
        );
    return <div>{cart}</div>;
};

export default Cart;
