import { useActions } from '@/hooks/combineActions';
import { useAppSelector } from '@/hooks/typedHooks';
import { Facet } from '@/interfaces/asosInterfaces/Items';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import SelectComponent from '../UI/SelectComponent';
import FilterButtons from '../UI/FilterButtons';
import { nanoid } from '@reduxjs/toolkit';

interface ISelectBarProps {
    data: Facet[];
}

const SelectBar: FC<ISelectBarProps> = ({ data }) => {
    const { setFilter } = useActions();
    const { filters } = useAppSelector(state => state.asos);
    if (!data) return <div />;

    const select = (
        <>
            {' '}
            {data.map((item, i) => (
                <div key={item.id}>
                    <SelectComponent
                        selectOptions={item}
                        defaultValue={data[i].name}
                        setValue={setFilter}
                    />
                </div>
            ))}
            <div className="flex ">
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
        </>
    );

    return <div className="bg-gray-100 grid grid-cols-6 gap-4">{select}</div>;
};

export default SelectBar;
