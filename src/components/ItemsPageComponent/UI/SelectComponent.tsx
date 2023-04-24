import { useActions } from '@/hooks/combineActions';
import { Variant } from '@/interfaces/asosInterfaces/item';
import { Facet } from '@/interfaces/asosInterfaces/Items';
import { ActionCreatorWithPayload, nanoid } from '@reduxjs/toolkit';
import { FC } from 'react';

interface ISelectComponent {
    selectOptions: Facet;
    setValue: ActionCreatorWithPayload<string, 'asos/setFilter'>;
    value?: string | undefined;
    categoryName: string;
}

const SelectComponent: FC<ISelectComponent> = ({
    selectOptions,
    setValue,
    value,
    categoryName,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value);
    };

    console.log('render');
    const options = selectOptions.facetValues.map((item, i) => (
        <option
            key={item.id}
            value={item.name}
            className="text-gray-500 bg-gray-100  "
        >
            {item.name}
        </option>
    ));

    return (
        <>
            <select
                key={selectOptions.id}
                className=" border-y-2  bg-transparent px-4 w-full h-10 "
                value={value}
                onChange={handleChange}
            >
                <option
                    disabled
                    selected
                >
                    {categoryName}
                </option>
                {options}
            </select>
        </>
    );
};

export default SelectComponent;
