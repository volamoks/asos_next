import React from 'react';
import { AiOutlineAccountBook } from 'react-icons/ai';
import { BsBox2 } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import CreateAccount from './CreateAccount_/CreateAccount';
import Logged from './Logged';

const AccountModal = ({ isAccountModal }) => {
    const isAccount = false;
    const element = isAccount ? <Logged /> : <CreateAccount />;

    const modal = isAccountModal && (
        <div className=" absolute flex flex-col  bg-gray-200 w-[320px] min-h-[150px] z-30 -left-[100px] top-[46px]">
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
