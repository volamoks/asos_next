import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideBar from './SideBar';

const Burger = () => {
    const [isSideBar, setIsSideBar] = React.useState(false);

    const hadleOpenSideBar = () => {
        setIsSideBar(!isSideBar);
    };
    const burder = (
        <div className="md:hidden">
            <button onClick={hadleOpenSideBar}>
                <GiHamburgerMenu
                    color={'white'}
                    size={20}
                />
                ;
            </button>
            <div>
                {isSideBar ? (
                    <SideBar
                        hadleOpenSideBar={hadleOpenSideBar}
                        isSideBar={isSideBar}
                    />
                ) : null}
            </div>
        </div>
    );
    return <>{burder}</>;
};

export default Burger;
