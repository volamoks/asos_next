import { FC } from 'react';
import Image from 'next/image';

import { SaveForLater } from './SaveForLater';
import { PriceInCartCard } from './PriceInCart';
import { SizeAndQtyCard } from './SizeAndQty';

import RemoveButton from '@/components/UI/RemoveButton';
import { IItemIncart } from '@/components/UI/AddToCartButton';

interface IItemsInCartProps {
    itemsInCart: IItemIncart[];
    totalItemsCost: number;
}

export const ItemsInCart: FC<IItemsInCartProps> = ({ itemsInCart }) => {
    const subTotalCost = itemsInCart.reduce(
        (acc, item) =>
            item.quantity
                ? acc + item.price.current.value * item.quantity
                : acc + item.price.current.value,
        0,
    );

    const itemCard = itemsInCart.map(item => (
        <div
            key={item.id}
            className="flex bg-white mt-5 pr-10 relative"
        >
            <RemoveButton item={item} />

            {itemsInCart.length > 0 && (
                <Image
                    className="w-40  p-5 object-cover"
                    src={'http://' + item?.media?.images?.find(pic => pic.isPrimary !== true)?.url}
                    alt="cart_item1"
                    height={140}
                    width={110}
                />
            )}
            <div className="flex flex-col bg-white mt-5 text-gray-500 my-2">
                <PriceInCartCard item={item} />
                <h2 className="text-lg mb-2">{item?.name}</h2>
                <SizeAndQtyCard item={item} />
                <SaveForLater item={item} />
            </div>
        </div>
    ));

    return (
        <div>
            <div className="flex justify-between p-3 bg-white">
                <span className="uppercase font-bold">My bag</span>
                <span className="">Items are reserved for 60 minutes</span>
            </div>
            {itemCard}
            <div className="flex gap-2 justify-end mt-5 bg-white">
                <div className=" flex xl:w-2/5 justify-between p-5 gap-2">
                    <span className="font-bold uppercase">Sub-total</span>
                    <span>{subTotalCost} USD</span>
                </div>
            </div>
        </div>
    );
};
