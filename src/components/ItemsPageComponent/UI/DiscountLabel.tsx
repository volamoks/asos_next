import { Product } from '@/interfaces/asosInterfaces/Items';
import { FC } from 'react';

interface IDiscountProps {
    item: Product;
}
export const DiscountLabel: FC<IDiscountProps> = ({ item: { price } }) => {
    const discountValue = price.rrp.value
        ? `-${((price.current.value / price.rrp.value) * 100).toFixed(0)} %`
        : null;

    return (
        <>
            {discountValue && (
                <div className="bg-white/90 text-red-500 text-xs px-2">
                    <span>{discountValue}</span>
                </div>
            )}
        </>
    );
};
