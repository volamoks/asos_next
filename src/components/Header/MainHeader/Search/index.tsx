import { useGetSeacrhItemsQuery } from '@/services/api/asosFetchApi';
import React, { FC, useDeferredValue, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearcModal from './SearchModal';

const SearchInput: FC = () => {
    const [isOpen, setModalOpen] = useState(false);
    const [value, setValue] = useState('');

    const deffValue = useDeferredValue(value);

    const { data, isLoading } = useGetSeacrhItemsQuery(value);

    const handChahge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        setOpen();
    };

    const setOpen = () => {
        setModalOpen(true);
    };

    const setClose = () => {
        setModalOpen(false);
        setValue('');
    };

    const form = (
        <form action="input ">
            <input
                onClick={setOpen}
                onChange={handChahge}
                placeholder="   Search for items"
                className="rounded-3xl w-max-screen-xl w-full my-1 h-[45px] relative z-30 border-2 pl-4"
                type="search"
                value={value}
            />
            <AiOutlineSearch
                className="absolute top-3 right-2"
                size="30px"
                color="black"
            />

            <SearcModal
                isOpen={isOpen}
                data={data}
                setClose={setClose}
            />
        </form>
    );

    return <div className="w-4/6  self-center ml-4 relative">{form}</div>;
};

export default SearchInput;
