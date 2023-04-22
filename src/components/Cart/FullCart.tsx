import { useAppSelector } from '@/hooks/typedHooks';

import { CheckOutCard } from './components/CheckOutCard';

import { ViewAllSavedItemsCard } from './components/ViewAll';
import { DeliveryCard } from './components/Delivery';
import { ItemsInCart } from './components/ItemsInCartList';

export const CartWithItems = () => {
    const inBag = useAppSelector(state => state.asos.inBag);

    const totalItemsCost = inBag.reduce(
        (acc, item) =>
            item.quantity
                ? acc + item.price.current.value * item.quantity
                : acc + item.price.current.value,
        0,
    );

    const cart = (
        <div className="flex flex-col xl:flex-cols-2 max-w-screen-lg mx-auto min-h-[calc(100vh-460px)] ">
            <div className="xl:flex">
                <div className="flex flex-col  xl:w-3/5  xl:mr-3 xl:mt-3">
                    <ItemsInCart
                        itemsInCart={inBag}
                        totalItemsCost={+totalItemsCost.toFixed(2)}
                    />
                    <DeliveryCard />
                </div>
                <CheckOutCard totalItemsCost={totalItemsCost} />
            </div>

            <ViewAllSavedItemsCard />
        </div>
    );

    return <div className=" bg-gray-200">{cart}</div>;
};
