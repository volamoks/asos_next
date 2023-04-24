import { FC, useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';

import FilterButtons from '../UI/FilterButtons';
import SelectComponent from '../UI/SelectComponent';

import { Facet } from '@/interfaces/asosInterfaces/Items';

interface ISelectBarProps {
    data: Facet[];
}

const SelectBar: FC<ISelectBarProps> = ({ data }) => {
    const { setFilter } = useActions();
    const { filters } = useAppSelector(state => state.asos);

    const select = useMemo(() => {
        return data.map((item, i) => (
            <div key={item.id}>
                <SelectComponent
                    selectOptions={item}
                    categoryName={data[i].name}
                    setValue={setFilter}
                />
            </div>
        ));
    }, []);

    if (!data) return <div />;

    const selectedFilters = filters.map((item, i) => (
        <div key={nanoid()}>
            <FilterButtons
                clearFilter={setFilter}
                filter={filters}
                i={i}
            />
        </div>
    ));

    return (
        <div className="w-full">
            <div className="bg-gray-100  hidden xl:grid grid-cols-5 gap-4 w-full py-4">
                {select}
            </div>
            <div className="none xl:flex ">{selectedFilters}</div>
        </div>
    );
};

export default SelectBar;
