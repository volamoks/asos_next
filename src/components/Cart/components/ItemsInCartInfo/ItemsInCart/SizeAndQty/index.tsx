import { IItemsInCartProps } from '@/components/Cart/interfaces';
import { IItemIncart } from '@/components/UI/AddToCartButton';
import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';
import { actions } from '@/services/reducers/asosReducer';
import { nanoid } from '@reduxjs/toolkit';
import React, { FC, useState } from 'react';

const SizeAndQty: FC<IItemsInCartProps> = ({ item }) => {
    const quantArr = [1, 2, 3, 4, 5];
    const { inBag } = useAppSelector(state => state.asos);
    const [size, setSize] = useState(inBag[0]?.size);
    const [quantity, setQuantity] = useState(1);

    const handleChangeSize = (e: React.ChangeEvent<HTMLSelectElement>, id: number) => {
        setSize(e.target.value);
        changeSizeAndQuantity({ id: id, size: e.target.value });
    };

    const handleChangeQty = (e: React.ChangeEvent<HTMLSelectElement>, id: number) => {
        setQuantity(+e.target.value);
        changeSizeAndQuantity({ id: id, quantity: +e.target.value });
    };

    const { changeSizeAndQuantity } = useActions();

    const element = (
        <>
            <p>{item.variants[0]?.colour}</p>
            <div className="w-1/3">
                SIZE
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
            <div className="w-1/3">
                QTY
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
        </>
    );
    return <div className="flex justify-between">{element}</div>;
};

export default SizeAndQty;
