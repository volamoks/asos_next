import { Product } from '@/interfaces/asosInterfaces/Items';
import { FC } from 'react';
interface IPriceProps {
    item: Product;
}
const PriceComponent: FC<IPriceProps> = ({ item }) => {
    const isOutletPrice = item.price.isOutletPrice;

    // console.log(item.price.previous.value);

    const price = !isOutletPrice ? (
        <span className="text-gray-500 font-bold text-center mt-4">{item.price.current.text}</span>
    ) : (
        <div className="flex mb-10">
            <span className="line-through text-gray-500 text-sm text-center mr-2 self-center">
                {item.price.rrp.text}
            </span>
            <span className="text-red-500 font-bold">{item.price.current.text}</span>
        </div>
    );

    return <div>{price}</div>;
};

export default PriceComponent;
