import { useCreateUserMutation, useGetUsersQuery } from '@/services/api/authApi';
import React from 'react';
import LoginBtns from '../SignUp/Ui/LoginButtons';
import LoginInput from './LoginInput';

const Login = () => {
    const element = (
        <div className="w-screen h-screen bg-gray-200 flex justify-center pt-[100px]">
            <div className="flex flex-col  w-[700px] bg-white h-[700px] p-12">
                <LoginBtns />
                <h2 className="text-xl text-black text-center uppercase font-bold m-12">
                    Sign in with Email
                </h2>
                <LoginInput />
            </div>
        </div>
    );
    return <div>{element}</div>;
};

export default Login;
