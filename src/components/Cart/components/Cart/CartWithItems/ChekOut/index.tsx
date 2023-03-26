import React, { FC } from 'react';

interface ICheckOutProps {
    total: number;
}
const CheckOut: FC<ICheckOutProps> = ({ total }) => {
    const deliveOptions = (
        <div className="flex justify-between border-b-2 my-5 w-5/6 mx-auto">
            <select>
                <option>Standart delivery</option>
                <option>Express delivery</option>
            </select>
        </div>
    );

    const deliveryCost = (
        <div className="flex justify-between border-b-2 w-5/6 mx-auto">
            <span className="font-bold my-2">Delivery</span>
            <span className="font-bold my-2"> 12.00 USD</span>
        </div>
    );

    const totalCost = (
        <>
            <p className="uppercase font-bold pt-6 pl-8">Total</p>
            <div className="flex mt-3 justify-between border-t-2 w-5/6 mx-auto">
                <span className="font-bold my-3">Sub-total</span>
                <span className="font-bold my-3">{total?.toFixed(2)} USD </span>
            </div>
        </>
    );

    const checkOutBtn = (
        <div className="w-4/5 flex flex-col mx-auto mt-3">
            <button className="bg-green-700 uppercase p-3 text-white font-bold w-full">
                chekout
            </button>
            <span className="font-bold uppercase mt-3 text-sm">we accept </span>
            <img
                className="mt-3 w-2/3"
                src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
                alt=""
            />
            <span className="mt-3 text-sm">Got a discount code? Add it in the next step.</span>
        </div>
    );
    return (
        <div className="flex flex-col w-2/5 bg-white max-h-[400px] mt-3">
            {totalCost}
            {deliveryCost}
            {deliveOptions}
            {checkOutBtn}
        </div>
    );
};

export default CheckOut;
