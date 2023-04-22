import { useAppSelector } from '@/hooks/typedHooks';

import NoSSR from '@/services/helpers/NoSSR';
import { CartWithItems } from './FullCart';

import { EmptyPage } from '../EmptyPage/EmptyPage';

export const Cart = () => {
    const inBag = useAppSelector(state => state.asos.inBag);

    return <NoSSR>{inBag.length ? <CartWithItems /> : <EmptyPage />}</NoSSR>;
};
