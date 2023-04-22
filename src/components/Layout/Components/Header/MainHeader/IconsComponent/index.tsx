import { FC, useEffect, useState } from 'react';

import { IoPerson, IoPersonOutline } from 'react-icons/io5';
import { AiFillHeart, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

import { BsBag, BsFillBagFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/typedHooks';
import AccountModal from './Account';

interface IIconsComponentProps {
    toggleModal: () => void;
    isModalOpen: boolean;
    setOrToggleModel: () => void;
}

export const IconsComponent: FC<IIconsComponentProps> = ({
    isModalOpen,
    toggleModal,

    setOrToggleModel,
}) => {
    const router = useRouter();
    const { loggedUser, inBag, inFav } = useAppSelector(state => state.asos);

    const handleGoToPage = (link: string) => {
        router.push(link);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isModalOpen]);

    const searchIcon = (
        <>
            <button
                className=" xl:hidden "
                onClick={setOrToggleModel}
            >
                <AiOutlineSearch
                    size="30px"
                    color="white"
                />
            </button>
        </>
    );

    const bagIcon = (
        <button onClick={() => handleGoToPage('/cart')}>
            {inBag.length > 0 ? (
                <BsFillBagFill
                    size="30px"
                    color="white"
                />
            ) : (
                <BsBag
                    size="30px"
                    color="white"
                />
            )}
        </button>
    );

    const personIcon = (
        <>
            <button onClick={toggleModal}>
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
            <div className="absolute top-0 xl:right-36 right-0">
                <AccountModal
                    isAccountModal={isModalOpen}
                    handleOpenAccount={toggleModal}
                    userData={loggedUser}
                />
            </div>
        </>
    );

    const heartIcon = (
        <button
            className=""
            onClick={() => handleGoToPage('/favorites')}
        >
            {!inFav.length ? (
                <AiOutlineHeart
                    size="32px"
                    color="white"
                />
            ) : (
                <AiFillHeart
                    size="32px"
                    color="white"
                />
            )}
        </button>
    );

    const modalBG = (
        <div
            onClick={toggleModal}
            className=" absolute bg-black/50 w-screen h-screen top-0 left-0 xl:right-0   z-10"
        ></div>
    );

    return (
        <>
            <div className={`flex  gap-4 justify-end  my-auto z-20 mr-2 `}>
                {searchIcon}
                {personIcon}
                {heartIcon}
                {bagIcon}
            </div>
            {isModalOpen && <>{modalBG}</>}
        </>
    );
};
