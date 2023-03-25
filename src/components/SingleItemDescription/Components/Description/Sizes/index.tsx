import { FC } from 'react';

import { SizesProps } from '@/components/SingleItemDescription/Interfaces';

const SizeComponent: FC<SizesProps> = ({ data, setSize, size }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSize(e.currentTarget.value);
    };

    const sizes = data.map(sizes =>
        sizes.isAvailable ? (
            <option
                key={sizes.id}
                value={sizes.displaySizeText}
            >
                {sizes.displaySizeText}
            </option>
        ) : (
            <option
                key={sizes.id}
                value={sizes.displaySizeText}
                disabled
                className="text-gray-500"
            >
                {sizes.displaySizeText}
            </option>
        ),
    );

    return (
        <div className="my-4">
            <select
                className="my-4  p-2 border-2 w-full"
                value={size}
                onChange={handleChange}
            >
                Select size: {sizes}
            </select>
        </div>
    );
};

export default SizeComponent;
