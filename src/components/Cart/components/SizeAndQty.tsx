import React, { FC, useState } from 'react';

import { nanoid } from '@reduxjs/toolkit';

import { IItemsInCartProps } from '@/components/Cart/interfaces';
import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';

export const SizeAndQtyCard: FC<IItemsInCartProps> = ({ item }) => {
    const quantArr = [1, 2, 3, 4, 5];
    const inBag = useAppSelector(state => state.asos.inBag);
    const [size, setSize] = useState(inBag[0]?.size);
    const [quantity, setQuantity] = useState(1);
    const { changeSizeAndQuantity } = useActions();
    if (!item.variants) return <div />;

    const handleChangeSize = (e: React.ChangeEvent<HTMLSelectElement>, id: number) => {
        setSize(e.target.value);
        changeSizeAndQuantity({ id, size: e.target.value });
    };

    const handleChangeQty = (e: React.ChangeEvent<HTMLSelectElement>, id: number) => {
        setQuantity(+e.target.value);
        changeSizeAndQuantity({ id, quantity: +e.target.value });
    };

    const colorElem = (
        <div className="w-1/4">{item.variants && <span>{item.variants[0]?.colour}</span>}</div>
    );

    const sizeElem = (
        <div className="flex w-2/4 ">
            <span className="hidden xl:flex">SIZE</span>
            <select
                value={size}
                onChange={e => handleChangeSize(e, item.id)}
            >
                {item.variants.map(
                    size =>
                        size.isAvailable && (
                            <option
                                key={size.id}
                                value={size.displaySizeText}
                            >
                                {size.displaySizeText}
                            </option>
                        ),
                )}
            </select>
        </div>
    );

    const qtyElem = (
        <div className="flex w-1/4">
            <span className="">QTY</span>
            <select
                value={quantity}
                onChange={e => handleChangeQty(e, item.id)}
            >
                QTY
                {quantArr.map(quant => (
                    <option
                        key={nanoid()}
                        value={quant}
                    >
                        {quant}
                    </option>
                ))}
            </select>
        </div>
    );

    return (
        <div className="flex w-full justify-between">
            {colorElem}
            {sizeElem}
            {qtyElem}
        </div>
    );
};
