import React from 'react';

import SelectGenderComponent from './SelectGender';
import IconsComponent from './IconsComponent';
import SearchInput from './Search';
import Logo from './Logo';

const MainHeader = () => {
    return (
        <div className="flex justify-between  max-w-screen-xl mx-auto ">
            <div className="flex w-1/3">
                <Logo />
                <SelectGenderComponent />
            </div>

            <SearchInput />

            <IconsComponent />
        </div>
    );
};

export default MainHeader;
