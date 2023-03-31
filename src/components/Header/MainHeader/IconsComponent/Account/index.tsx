import { FC } from 'react';

import { ILoggedUser } from '@/services/reducers/asosReducer';

import CreateAccount from './CreateAccount_/CreateAccount';
import Logged from './Logged';

import { BsBox2 } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';

interface IAccountModalProps {
    isAccountModal: boolean;
    userData: ILoggedUser;
}
const AccountModal: FC<IAccountModalProps> = ({ isAccountModal, userData }) => {
    const element = userData?.isAuth ? <Logged userData={userData} /> : <CreateAccount />;

    const modal = isAccountModal && (
        <div className=" absolute flex flex-col  bg-gray-200 xl:w-[320px] xl:min-h-[150px] z-30 -left-[100px] top-[46px]">
            {element}
            <div className="flex items-center px-4 text-gray-700 hover:text-blue-500">
                <IoPersonOutline size={24} />
                <div className="text-xl p-4">My account</div>
            </div>
            <div className="flex items-center px-4 text-gray-700 hover:text-blue-500">
                <BsBox2 size={22} />
                <div className="text-xl p-4">My orders</div>
            </div>
        </div>
    );

    return <>{modal}</>;
};

export default AccountModal;
