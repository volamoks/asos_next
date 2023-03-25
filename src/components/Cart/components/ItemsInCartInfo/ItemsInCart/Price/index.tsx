import { ISizeAndQtyProps } from '@/components/Cart/interfaces';
import  { FC } from 'react';

const Price: FC<ISizeAndQtyProps> = ({ item }) => {
    const element = !item.price.isOutletPrice ? (
        <p className="text-gray-700 font-bold">{item.price.current.text}</p>
    ) : (
        <div className="flex flex-row align-middle ">
            <span className="text-red-500 font-bold mr-2">{item.price.current.text}</span>
            <span className="text-gray-500  text-xs line-through self-center">
                RRP {item.price.previous.text}
            </span>
        </div>
    );
    return <div>{element}</div>;
};

export default Price;
