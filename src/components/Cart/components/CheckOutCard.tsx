import { FC, useState } from 'react';
import Image from 'next/image';

interface ICheckOutProps {
    totalItemsCost: number;
}
export const CheckOutCard: FC<ICheckOutProps> = ({ totalItemsCost }) => {
    const [delivery, setDelivery] = useState(12);

    const handleDeliveryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.currentTarget.value);
        setDelivery(value);
    };

    const standardDelivery = 12;
    const expressDelivery = 20;

    const totalDeliveryCost =
        totalItemsCost > 200 && delivery === expressDelivery
            ? 0
            : totalItemsCost > 100 && delivery === standardDelivery
            ? 0
            : delivery;

    console.log(totalDeliveryCost, totalItemsCost);

    const deliveryOptions = (
        <div className="flex justify-between border-b-2 xl:my-5 xl:w-5/6 mx-auto">
            <select
                value={delivery}
                onChange={handleDeliveryChange}
            >
                <option value={12}>Standard delivery</option>
                <option value={20}>Express delivery</option>
            </select>
        </div>
    );

    const deliveryCost = (
        <div className="flex justify-between border-b-2 w-5/6 mx-auto">
            <span className="font-bold my-2">Includes Delivery</span>
            <span className="font-bold my-2"> {totalDeliveryCost.toFixed(2)} USD</span>
        </div>
    );

    const totalCost = (
        <>
            <p className="uppercase font-bold pt-6 pl-8">Total</p>
            <div className="flex mt-3 justify-between border-t-2 w-5/6 mx-auto">
                <span className="font-bold my-3">Total</span>
                <span className="font-bold my-3">
                    {(totalItemsCost + totalDeliveryCost).toFixed(2)} USD{' '}
                </span>
            </div>
        </>
    );

    const checkOutBtn = (
        <div className="w-4/5 flex flex-col mx-auto mt-3">
            <button className="bg-green-700 uppercase p-3 text-white font-bold w-full">
                checkout
            </button>
            <span className="font-bold uppercase mt-3 text-sm">we accept </span>
            <Image
                className="mt-3 object-cover  mb-8"
                src="/checkout.png"
                width={260}
                height={29}
                alt=""
            />
        </div>
    );
    return (
        <div className="flex flex-col xl:w-2/5 bg-white max-h-[400px] mt-3">
            {totalCost}
            {deliveryCost}
            {deliveryOptions}
            {checkOutBtn}
        </div>
    );
};
