import React from 'react';

import NoSSR from '@/services/helpers/NoSSR';

import SelectGenderComponent from './SelectGender';
import IconsComponent from './IconsComponent';
import SearchInput from './Search';
import Logo from './Logo';

import Burger from './Burger';

const MainHeader = () => {
    return (
        <NoSSR>
            <div className="flex justify-around max-w-screen-xl mx-auto  pt-4 xl:pt-0 relative">
                <div className="w-1/6 xl:hidden self-center ">
                    <Burger />
                </div>
                <div className="w-1/6 self-center ">
                    <Logo />
                </div>
                <div className="w-1/5">
                    <SelectGenderComponent />
                </div>

                <div className="w-5/6">
                    <SearchInput />
                </div>
                <div className="w-1/5 my-auto ">
                    <IconsComponent />
                </div>
            </div>
        </NoSSR>
    );
};

export default MainHeader;
