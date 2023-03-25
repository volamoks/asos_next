import { Product } from '@/interfaces/asosInterfaces/Items';
import { FC } from 'react';

interface ISellengFast {
    item: Product;
}
const SellingFastLabel: FC<ISellengFast> = ({ item }) => {
    const isSellingfast = item.isSellingFast;

    return isSellingfast ? (
        <div className="bg-black/60 uppercase text-white font-bold px-4 rounded-l-xl ">
            Selling Fast
        </div>
    ) : (
        <div />
    );
};

export default SellingFastLabel;
