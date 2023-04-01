import { FC } from 'react';

import { ILoggedUser } from '@/services/reducers/asosReducer';

import CreateAccount from './CreateAccount_/CreateAccount';
import Logged from './Logged';

import { BsBox2 } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';

interface IAccountModalProps {
    isAccountModal: boolean;
    userData: ILoggedUser;
    handleOpenAccount: () => void;
}

const AccountModal: FC<IAccountModalProps> = ({ isAccountModal, userData, handleOpenAccount }) => {
    const element = userData?.isAuth ? (
        <Logged
            userData={userData}
            handleOpenAccount={handleOpenAccount}
        />
    ) : (
        <CreateAccount handleOpenAccount={handleOpenAccount} />
    );

    const modal = isAccountModal && (
        <div className=" absolute  flex flex-col bg-gray-200 w-[200px] pr-2xl:w-[320px] xl:min-h-[150px] z-30 right-0 top-[60px] ">
            {element}
            <div className="flex items-center px-4 text-xs xl:text-base text-gray-700 hover:text-blue-500">
                <IoPersonOutline size={24} />
                <div className="text-lg xl:text-xl p-4">My account</div>
            </div>
            <div className="flex items-center  px-4 text-gray-700 hover:text-blue-500 ">
                <BsBox2 size={22} />
                <div className="text-lg xl:text-xl p-4">My orders</div>
            </div>
        </div>
    );

    return <>{modal}</>;
};

export default AccountModal;
