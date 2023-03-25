import { Variant } from '@/interfaces/asosInterfaces/item';
import { nanoid } from '@reduxjs/toolkit';
import React, { FC } from 'react';

interface SizesProps {
    data: Variant[];
}

const SizeComponent: FC<SizesProps> = ({ data }) => {
    const sizes = data.map(sizes => (
        <select
            key={sizes.id}
            value={''}
            // onChange={''}
            className="my-5"
        >
            {sizes.isAvailable && (
                <option
                    key={sizes.id}
                    value={sizes.displaySizeText}
                >
                    {sizes.displaySizeText}
                </option>
            )}
            

            {!sizes.isAvailable && (
                <option
                    key={sizes.id}
                    value={sizes.displaySizeText}
                    disabled
                    className="text-gray-500"
                >
                    {sizes.displaySizeText}
                </option>
            )}
        </select>
    ));

    return <div>{sizes}</div>;
};

export default SizeComponent;
