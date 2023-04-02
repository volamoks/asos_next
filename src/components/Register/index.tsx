import { useCreateUserMutation } from '@/services/api/authApi';
import { FC, useCallback, useEffect, useState } from 'react';
import LoginBtns from './Ui/LoginBtns';
import LoginForm from './LogIn';
import RegisterForm from './SignUp';
// import { nanoid } from '@reduxjs/toolkit';
// import axios from 'axios';
import GreyButton from './Ui/GreyButton';
import LoginBtn from './Ui/LoginBtn';
import { signIn } from 'next-auth/react';
import router from 'next/router';
import { useAppSelector } from '@/hooks/typedHooks';

const RegisterNew: FC = () => {
    const { authPage } = useAppSelector(state => state.asos);

    const [isLogin, setIsLogin] = useState(authPage === 'login' ? true : false);

    useEffect(() => {
        setIsLogin(authPage === 'login' ? true : false);
    }, [authPage]);

    const [user, setUser] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });

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

    const [createUser, { data }] = useCreateUserMutation();

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
    }, [user.email, user.password, router]);

    const handleSubmit = () => {
        const userData = { ...user };
        console.log(userData);
        createUser(userData)
            .unwrap()
            .then(() => {})
            .catch(error => {
                console.log(error);
            });
    };

    const activeFrom = isLogin ? (
        <LoginForm handleInput={handleInput} />
    ) : (
        <RegisterForm handleInput={handleInput} />
    );

    const loginOrRegister = (
        <div className="flex justify-between h-[80px]">
            <LoginBtn
                buttonName="log in"
                isLogin={isLogin}
                handleSetLogin={handleSetLogin}
            />
            <LoginBtn
                buttonName="Register"
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
        <div className="w-screen h-[calc(100vh - 1rem)] bg-gray-200 flex justify-center pt-[100px]">
            <div className="flex flex-col w-[700px] bg-white h-[1000px] xl:h-[500px] p-12">
                {loginOrRegister}
                <h2 className="text-xl text-black text-center uppercase font-bold m-2 xl:m-12">
                    {isLogin ? 'Login with Email ' : `Sign up with Email`}
                </h2>
                {activeFrom}
                {submitButton}
            </div>
        </div>
    );
    return <div>{element}</div>;
};

export default RegisterNew;
