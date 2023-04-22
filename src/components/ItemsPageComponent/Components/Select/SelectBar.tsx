import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';
import { Facet } from '@/interfaces/asosInterfaces/Items';
import { FC, useMemo } from 'react';
import SelectComponent from '../UI/SelectComponent';
import FilterButtons from '../UI/FilterButtons';
import { nanoid } from '@reduxjs/toolkit';

interface ISelectBarProps {
    data: Facet[];
}

const SelectBar: FC<ISelectBarProps> = ({ data }) => {
    const { setFilter } = useActions();
    const { filters } = useAppSelector(state => state.asos);

    const select = useMemo(() => {
        return (
            <>
                {data.map((item, i) => (
                    <div key={item.id}>
                        <SelectComponent
                            selectOptions={item}
                            categoryName={data[i].name}
                            setValue={setFilter}
                        />
                    </div>
                ))}
            </>
        );
    }, []);

    if (!data) return <div />;

    const selectedFilters = (
        <div className="none xl:flex ">
            {filters.map((item, i) => (
                <div key={nanoid()}>
                    <FilterButtons
                        clearFilter={setFilter}
                        filter={filters}
                        i={i}
                    />
                </div>
            ))}
        </div>
    );

    return (
        <div className="w-full">
            <div className="bg-gray-100  hidden xl:grid grid-cols-5 gap-4 w-full py-4">
                {select}
            </div>
            {selectedFilters}
        </div>
    );
};

export default SelectBar;
