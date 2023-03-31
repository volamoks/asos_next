import { useAppSelector } from '@/hooks/typedHooks';
import NoSSR from '@/services/helpers/NoSSR';
import React, { useEffect, useState } from 'react';
import { getLocatStorage } from '../../utilities/localStorage';
import CartWithItems from './CartWithItems';
import EmptyBag from './EmptyCArt/EmptyBag';

const Cart = () => {
    const { inBag } = useAppSelector(state => state.asos);

    const cart = inBag.length ? (
        <NoSSR>
            <div>
                <CartWithItems />
            </div>
        </NoSSR>
    ) : (
        <NoSSR>
            <div>
                <EmptyBag />
            </div>
        </NoSSR>
    );
    return <div>{cart}</div>;
};

export default Cart;
