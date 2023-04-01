import { FC, useEffect, useState } from 'react';

import { IoPerson, IoPersonOutline } from 'react-icons/io5';
import { AiFillHeart, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

import { BsBag, BsFillBagFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/typedHooks';
import AccountModal from './Account';

import { IsearchInput } from '../Search';

const IconsComponent: FC<IsearchInput> = ({ setOpen, value, setClose, handleChange }) => {
    const router = useRouter();
    const { loggedUser } = useAppSelector(state => state.asos);
    const { inBag } = useAppSelector(state => state.asos);
    const { inFav } = useAppSelector(state => state.asos);

    const [isAccountModal, setInAccountModal] = useState(false);

    const hadleGoToPage = (link: string) => {
        router.push(link);
    };

    const handleOpenAccount = () => {
        setInAccountModal(!isAccountModal);
    };

    useEffect(() => {
        if (isAccountModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isAccountModal]);

    const searchIcon = (
        <>
            <div className=" xl:hidden ">
                <button onClick={setOpen}>
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
                    handleOpenAccount={handleOpenAccount}
                    userData={loggedUser}
                />
            </div>
        </div>
    );

    const heartIcon = (
        <div className="">
            {!inFav.length ? (
                <button>
                    <AiOutlineHeart
                        onClick={() => hadleGoToPage('/favorites')}
                        size="30px"
                        color="white"
                    />
                </button>
            ) : (
                <button>
                    <AiFillHeart
                        onClick={() => hadleGoToPage('/favorites')}
                        size="30px"
                        color="white"
                    />
                </button>
            )}
        </div>
    );

    const modal = (
        <div
            className="absolute bg-black/70 w-screen h-screen z-10 top-[60px] left-0 "
            onClick={handleOpenAccount}
        ></div>
    );

    return (
        <div
            className={`flex  gap-4 justify-end my-auto z-10 mr-2 ${
                isAccountModal ? 'mr-2' : 'mr-2'
            }`}
        >
            {searchIcon}
            {personIcon}
            {heartIcon}
            {bag}
            {isAccountModal && <div>{modal}</div>}
        </div>
    );
};

export default IconsComponent;
