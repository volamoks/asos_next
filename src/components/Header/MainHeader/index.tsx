import { useState } from 'react';

import NoSSR from '@/services/helpers/NoSSR';

import SelectGenderComponent from './SelectGender';
import IconsComponent from './IconsComponent';
import SearchInput from './Search';
import Logo from './Logo';

import Burger from './Burger';
import SearcModal from './Search/SearchModal';
import { useGetSeacrhItemsQuery } from '@/services/api/asosFetchApi';

const MainHeader = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [value, setValue] = useState('');
    const { data, isLoading } = useGetSeacrhItemsQuery(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    return (
        <NoSSR>
            <>
                <div className="flex justify-around max-w-screen-xl mx-auto  pt-4 xl:pt-0 relative">
                    <div className="w-1/6 xl:hidden self-center ">
                        <Burger />
                    </div>
                    <div className="w-1/6 self-center ">
                        <Logo />
                    </div>
                    <div className="w-1/5 hidden xl:flex">
                        <SelectGenderComponent />
                    </div>

                    <div className="w-5/6">
                        <SearchInput
                            setOpen={setOpen}
                            value={value}
                            handleChange={handleChange}
                            isModalOpen={isModalOpen}
                            setClose={setClose}
                        />
                    </div>
                    <div className="w-1/5 my-auto ">
                        <IconsComponent
                            setOpen={setOpen}
                            value={value}
                            setClose={setClose}
                            isModalOpen={isModalOpen}
                            handleChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <SearcModal
                        isModalOpen={isModalOpen}
                        data={data}
                        setClose={setClose}
                    />
                </div>
            </>
        </NoSSR>
    );
};

export default MainHeader;
