import { Product } from '@/interfaces/asosInterfaces/Items';
import { FC } from 'react';

interface IDiscountProps {
    item: Product;
}
const Discount: FC<IDiscountProps> = ({ item }) => {
    const discount = item.price.rrp.value
        ? `-${((item.price.current.value / item.price.rrp.value) * 100).toFixed(0)} %`
        : null;

    return discount ? (
        <div className="bg-white/90 text-red-500 text-xs px-2">
            <span>{discount}</span>
        </div>
    ) : (
        <div />
    );
};

export default Discount;
