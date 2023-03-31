import { FC, useState } from 'react';

import { IoPerson, IoPersonOutline } from 'react-icons/io5';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

import { BsBag, BsFillBagFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/typedHooks';
import AccountModal from './Account';

const IconsComponent: FC = () => {
    const router = useRouter();
    const { loggedUser } = useAppSelector(state => state.asos);
    const { inBag } = useAppSelector(state => state.asos);

    const [isAccountModal, setInAccountModal] = useState(false);

    const hadleGoToPage = (link: string) => {
        router.push(link);
    };

    const handleOpenAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
        setInAccountModal(!isAccountModal);
    };

    const searchIcon = (
        <>
            <div className=" xl:hidden ">
                <button onClick={handleOpenAccount}>
                    <AiOutlineSearch
                        size="30px"
                        color="white"
                    />
                </button>
            </div>
            <div className="xl:flex absolute right-[180px] hidden">
                <button onClick={handleOpenAccount}>
                    <AiOutlineSearch
                        size="30px"
                        color="black"
                    />
                </button>
            </div>
        </>
    );

    const bag = (
        <div className=" ">
            {inBag.length > 0 ? (
                <BsFillBagFill
                    onClick={() => hadleGoToPage('/cart')}
                    size="30px"
                    color="white"
                />
            ) : (
                <BsBag
                    onClick={() => hadleGoToPage('/cart')}
                    size="30px"
                    color="white"
                />
            )}
        </div>
    );

    const personIcon = (
        <div className=" ">
            <button onClick={handleOpenAccount}>
                {loggedUser.isAuth ? (
                    <IoPerson
                        size="30px"
                        color="white"
                    />
                ) : (
                    <IoPersonOutline
                        size="30px"
                        color="white"
                    />
                )}
            </button>
            <div>
                <AccountModal
                    isAccountModal={isAccountModal}
                    userData={loggedUser}
                />
            </div>
        </div>
    );

    const heartIcon = (
        <div className="">
            <button>
                <AiOutlineHeart
                    onClick={() => hadleGoToPage('/favorites')}
                    size="30px"
                    color="white"
                />
            </button>
        </div>
    );

    return (
        <div className="flex  gap-4 justify-end relative my-auto">
            {searchIcon}
            {personIcon}
            {heartIcon}
            {bag}
        </div>
    );
};

export default IconsComponent;
