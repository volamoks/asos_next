import React, { FC } from 'react';

interface ICheckOutProps {
    total: number;
}
const CheckOut: FC<ICheckOutProps> = ({ total }) => {
    const [delivery, setDelivery] = React.useState(12);
    const [deliveryType, setDeliveryType] = React.useState('');

    const handleDeliveryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.currentTarget.value);
        setDelivery(value);
    };

    console.log(deliveryType);
    const totalDelivery =
        total > 200 && delivery === 20 ? 0 : total > 100 && delivery === 12 ? 0 : delivery;

    const deliveOptions = (
        <div className="flex justify-between border-b-2 xl:my-5 xl:w-5/6 mx-auto">
            <select
                value={delivery}
                onChange={handleDeliveryChange}
            >
                <option value={12}>Standart delivery</option>
                <option value={20}>Express delivery</option>
            </select>
        </div>
    );

    const deliveryCost = (
        <div className="flex justify-between border-b-2 w-5/6 mx-auto">
            <span className="font-bold my-2">Includes Delivery</span>
            <span className="font-bold my-2"> {totalDelivery.toFixed(2)} USD</span>
        </div>
    );

    const totalCost = (
        <>
            <p className="uppercase font-bold pt-6 pl-8">Total</p>
            <div className="flex mt-3 justify-between border-t-2 w-5/6 mx-auto">
                <span className="font-bold my-3">Total</span>
                <span className="font-bold my-3">{(total + totalDelivery).toFixed(2)} USD </span>
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
        <div className="flex flex-col xl:w-2/5 bg-white max-h-[400px] mt-3">
            {totalCost}
            {deliveryCost}
            {deliveOptions}
            {checkOutBtn}
        </div>
    );
};

export default CheckOut;
