import { IItemPageProps } from '@/components/SingleItemDescription/Interfaces';
import { FC } from 'react';

const Price: FC<IItemPageProps> = ({ item }) => {
    const price = item.price.isOutletPrice ? (
        <div className="flex flex-col">
            <span className="mb-5 font-bold text-sm  text-slate-600">
                Was {item.price.previous.text}
            </span>{' '}
            <span className="mb-5 font-bold text-xl text-red-600">
                Now {item.price.current.text}
            </span>
        </div>
    ) : (
        <span className="mb-5 font-bold text-xl text-slate-600">{item.price.current.text}</span>
    );

    return (
        <div>
            <h1 className="mb-5 text-xl">{item.name}</h1>
            {price}
        </div>
    );
};

export default Price;
