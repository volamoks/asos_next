import { BsTruck } from 'react-icons/bs';

export const DeliveryCard = () => {
    const delivery = (
        <div className="flex mt-5 bg-white">
            <div className="flex w-1/6">
                <BsTruck className="text-3xl m-auto" />
            </div>
            <div className=" flex flex-col justify-start p-5">
                <span className="font-bold uppercase my-1">
                    Free standart Delivery over 100 USD
                </span>
                <span>Faster delivery options available to most countries.</span>
                <a
                    className="underline my-1"
                    href="#"
                >
                    More info
                </a>
            </div>
        </div>
    );
    return <>{delivery}</>;
};
