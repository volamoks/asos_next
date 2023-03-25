import React, { FC } from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import { IItemIncart } from '../../../../UI/AddToCartButton';
import RemoveButton from '../../../../UI/RemoveButton';
import SizeAndQty from './SizeAndQty';
import Price from './Price';
import SaveForLater from '@/components/Cart/UI/SaveForLater';

interface IItemsInCartProps {
    data: IItemIncart[];
    total: number;
}

const ItemsInCart: FC<IItemsInCartProps> = ({ data, total }) => {
    const itemsInCart = data.map(item => (
        <div className="flex bg-white mt-5 pr-10 relative">
            <RemoveButton item={item} />

            {data.length > 0 && (
                <img
                    className="w-40  p-5 object-cover"
                    src={'http://' + item?.media?.images?.find(pic => pic.isPrimary !== true)?.url}
                    alt="cart_item1"
                    height={140}
                    width={110}
                />
            )}
            <div className="flex flex-col bg-white mt-5 text-gray-500 my-2">
                <Price item={item} />
                <p className="text-lg mb-2">{item.name}</p>
                <SizeAndQty item={item} />
                <SaveForLater />
            </div>
        </div>
    ));

    const subTotal = (
        <div className="flex  justify-end mt-5 bg-white">
            <div className=" flex w-2/5 justify-between p-5">
                <span className="font-bold uppercase">Sub-total</span>
                <span>{total} USD</span>
            </div>
        </div>
    );

    const reservedModal = (
        <div className="flex justify-between p-3 bg-white">
            <p className="uppercase font-bold">My bag</p>
            <p className="">Items are reserved for 60 minutes</p>
        </div>
    );

    return (
        <div>
            {reservedModal}
            {itemsInCart}
            {subTotal}
        </div>
    );
};

export default ItemsInCart;
