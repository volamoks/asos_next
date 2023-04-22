import { useEffect, useState } from 'react';

import NoSSR from '@/services/helpers/NoSSR';

import SelectGenderComponent from './SelectGender';
import { IconsComponent } from './IconsComponent';
import { SearchInput } from './Search';
import Logo from './Logo';

import Burger from './Burger';
import { SearchModal } from './Search/SearchModal';
import { useSetModal } from '@/hooks/useToggleModal';

const MainHeader = () => {
    const [value, setValue] = useState('');

    const { isModal: isSearchModalOpen, toggleModal: toggleSearchModal } = useSetModal();
    const { isModal: isAccountModalOpen, toggleModal: toggleAccountModal } = useSetModal();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    useEffect(() => {
        if (isSearchModalOpen || isAccountModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isSearchModalOpen, isAccountModalOpen]);

    const modalBG = () => {
        if (!isSearchModalOpen || isAccountModalOpen) return <></>;
        return (
            <div
                onClick={toggleSearchModal}
                className=" absolute xl:bg-black/50 w-screen h-screen z-10"
            ></div>
        );
    };

    return (
        <NoSSR>
            <>
                <div className="flex justify-around max-w-screen-xl mx-auto  pt-4 xl:pt-0  ">
                    <div className="w-1/6 xl:hidden self-center ">
                        <Burger />
                    </div>
                    <div className="w-1/6 self-center ">
                        <Logo />
                    </div>
                    <div className="w-1/5 hidden xl:flex">
                        <SelectGenderComponent />
                    </div>
                    <div className="w-5/6 xl:relative">
                        <SearchInput
                            value={value}
                            handleChange={handleChange}
                            isSearchModalOpen={isSearchModalOpen}
                            setOrToggleModel={toggleSearchModal}
                        />
                        <SearchModal
                            isSearchModalOpen={isSearchModalOpen}
                            value={value}
                        />
                    </div>
                    <div className="w-1/5 my-auto z-10  ">
                        <IconsComponent
                            isModalOpen={isAccountModalOpen}
                            toggleModal={toggleAccountModal}
                            setOrToggleModel={toggleSearchModal}
                        />
                    </div>
                    {modalBG()}
                </div>
            </>
        </NoSSR>
    );
};

export default MainHeader;
