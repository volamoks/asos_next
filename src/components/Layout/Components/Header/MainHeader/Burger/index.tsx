import { FC, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideBar from './SideBar';

const Burger: FC = () => {
    const [isSideBar, setIsSideBar] = useState(false);
    const [IsSecondSideBar, setIsSecondSideBar] = useState(false);

    const hadleOpenSideBar = () => {
        setIsSecondSideBar(false);
        setIsSideBar(true);
    };

    const hadleCloseSideBar = () => {
        setIsSideBar(false);
    };

    const burger = (
        <>
            <button
                className="ml-2"
                onClick={hadleOpenSideBar}
            >
                <GiHamburgerMenu
                    color={'white'}
                    size={30}
                />
            </button>
            <div>
                {isSideBar ? (
                    <SideBar
                        handleOpenSideBar={hadleOpenSideBar}
                        handleCloseSideBar={hadleCloseSideBar}
                        setIsSecondBar={setIsSecondSideBar}
                        isSecondBar={IsSecondSideBar}
                        isSideBar={isSideBar}
                    />
                ) : null}
            </div>
        </>
    );
    return <div className="xl:hidden pt-1">{burger}</div>;
};

export default Burger;
