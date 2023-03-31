import { FC, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideBar from './SideBar';

const Burger: FC = () => {
    const [isSideBar, setIsSideBar] = useState(false);

    const hadleOpenSideBar = () => {
        setIsSideBar(!isSideBar);
    };
    const burder = (
        <>
            <button onClick={hadleOpenSideBar}>
                <GiHamburgerMenu
                    color={'white'}
                    size={20}
                />
            </button>
            <div>
                {isSideBar ? (
                    <SideBar
                        hadleOpenSideBar={hadleOpenSideBar}
                        isSideBar={isSideBar}
                    />
                ) : null}
            </div>
        </>
    );
    return <div className="md:hidden">{burder}</div>;
};

export default Burger;
