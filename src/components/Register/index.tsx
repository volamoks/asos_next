import { useCreateUserMutation, useGetUsersQuery } from '@/services/api/authApi';
import { FC, useCallback, useEffect, useState } from 'react';
import LoginForm from '@/components/Register/components/Login';
import RegisterForm from '@/components/Register/components/SignUp';
// import { nanoid } from '@reduxjs/toolkit';
// import axios from 'axios';
import GreyButton from '@/components/Register/Ui/GreyButton';
import LoginBtn from '@/components/Register/Ui/LoginBtn';
import { getSession, signIn } from 'next-auth/react';
import router from 'next/router';
import { useActions } from '@/hooks/combineActions';

export const Register: FC = () => {
    const { data: userData } = useGetUsersQuery('');

    const [isLogin, setIsLogin] = useState(true);
    const [user, setUser] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });

    useEffect(() => {
        userData && setAuth({ ...userData, isAuth: true });
    }, [userData]);

    const handleSetLogin = () => {
        setIsLogin(!isLogin);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        switch (name) {
            case 'EMAIL ADDRESS':
                setUser({ ...user, email: e.target.value });
                break;
            case 'FIRST NAME':
                setUser({ ...user, firstName: e.target.value });
                break;
            case 'LAST NAME':
                setUser({ ...user, lastName: e.target.value });
                break;
            case 'PASSWORD':
                setUser({ ...user, password: e.target.value });
                break;
            default:
                break;
        }
    };

    const { setAuth } = useActions();

    const [createUser] = useCreateUserMutation();

    const handleLoginIn = useCallback(async () => {
        try {
            await signIn('credentials', {
                email: user.email,
                password: user.password,
                redirect: false,
                callbackUrl: '/',
            });
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }, [user.email, user.password]);

    const handleSubmit = () => {
        const userData = { ...user };
        createUser(userData);
    };

    const activeFrom = isLogin ? (
        <LoginForm handleInput={handleInput} />
    ) : (
        <RegisterForm handleInput={handleInput} />
    );

    const loginOrRegister = (
        <div className="flex justify-between h-[50px]">
            <LoginBtn
                buttonName="log in"
                isLogin={isLogin}
                handleSetLogin={handleSetLogin}
            />
            <LoginBtn
                buttonName="Register "
                isLogin={!isLogin}
                handleSetLogin={handleSetLogin}
            />
        </div>
    );

    const submitButton = isLogin ? (
        <GreyButton
            buttonName="Login In"
            handleSubmit={handleLoginIn}
        />
    ) : (
        <GreyButton
            buttonName="Sing Up"
            handleSubmit={handleSubmit}
        />
    );

    const element = (
        <div className="w-screen h-[calc(100vh-100px)]  md:h-[calc(100vh-200px-100px)] xl:min-h-[calc(100vh-100px)] bg-gray-200 flex justify-center xl:pt-20 py-6">
            <div className="flex flex-col  w-[700px] bg-white h-[670px] md:h-[700px] p-12">
                {loginOrRegister}
                <h2 className="xl:text-xl text-lg text-black text-center uppercase font-bold mt-8 mb-2 xl:m-12">
                    {isLogin ? 'Login with Email ' : `Sign up with Email`}
                </h2>
                {activeFrom}
                {submitButton}
            </div>
        </div>
    );
    return <div>{element}</div>;
};
