import { FC } from 'react';

import MainHeader from './MainHeader';
import SecondHeader from './SecondHeader';

const Header: FC = () => {
    return (
        <header className="relative ">
            <div className="bg-[#2d2d2d] h-[60px]   ">
                <MainHeader />
            </div>

            <div>
                <SecondHeader />
            </div>
        </header>
    );
};

export default Header;
