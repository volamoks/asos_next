import { ISizeAndQtyProps } from '@/components/Cart/interfaces';
import React, { FC } from 'react';

const SizeAndQty: FC<ISizeAndQtyProps> = ({ item }) => {
    const quantArr = [1, 2, 3, 4, 5];

    const element = (
        <>
            {' '}
            <p>{item.variants[0]?.colour}</p>
            <div className="w-1/3">
                SIZE
                <select>
                    {item.variants.map(size => (
                        <>{size.isAvailable && <option>{size.displaySizeText}</option>}</>
                    ))}
                </select>
            </div>
            <div className="w-1/3">
                QTY
                <select value={item.quantity}>
                    QTY
                    {quantArr.map(quant => (
                        <option>{quant}</option>
                    ))}
                </select>
            </div>
        </>
    );
    return <div className="flex justify-between">{element}</div>;
};

export default SizeAndQty;
