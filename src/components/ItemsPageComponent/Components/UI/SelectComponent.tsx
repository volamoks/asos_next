import { useActions } from '@/hooks/combineActions';
import { Variant } from '@/interfaces/asosInterfaces/item';
import { Facet } from '@/interfaces/asosInterfaces/Items';
import { ActionCreatorWithPayload, nanoid } from '@reduxjs/toolkit';
import { FC } from 'react';

interface ISelectComponent {
    selectOptions: Facet;
    setValue: ActionCreatorWithPayload<string, 'asos/setFilter'>;
    value?: string | undefined;
    defaultValue: string;
}

const SelectComponent: FC<ISelectComponent> = ({
    selectOptions,
    setValue,
    value,
    defaultValue,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value);
    };

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
        <select
            key={selectOptions.id}
            className="my-2 border-y-2  bg-transparent mx-4 w-full h-10 "
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
        >
            {options}
        </select>
    );
};

export default SelectComponent;
