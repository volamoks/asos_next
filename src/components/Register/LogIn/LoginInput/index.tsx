import { useActions } from '@/hooks/combineActions';
import { useGetUsersQuery } from '@/services/api/authApi';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import InputForm from '../../SignUp/Ui/InputForm';

const LoginInput = () => {
    const [userData, setUserData] = useState({ email: '', password: '', id: '' });
    const router = useRouter();
    const { setAuth } = useActions();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, item: string) => {
        switch (item) {
            case 'EMAIL ADDRESS':
                setUserData({ ...userData, email: e.target.value });
                break;
            case 'PASSWORD':
                setUserData({ ...userData, password: e.target.value });
                break;
            default:
                break;
        }
    };

    const { data } = useGetUsersQuery(userData.email);

    const LoginIn = () => {
        try {
            if (data[0].email === userData.email && data[0].password === userData.password) {
                router.push('/');
                const authData = { isAuth: true, user: data[0].firstName, id: data[0].id };
                setAuth(authData);
                localStorage.setItem('userIsLogin', JSON.stringify(authData));
            } else {
                throw new Error('passwors is inccoorect');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const inputsData = [
        { id: 1, type: 'email', name: 'EMAIL ADDRESS', required: true },
        { id: 4, type: 'password', name: 'PASSWORD', required: true },
    ];

    const element = (
        <>
            {inputsData.map(item => (
                <div
                    key={item.id}
                    className="self-center"
                >
                    <InputForm
                        item={item}
                        handleInput={handleInput}
                    />
                    <div className="self-center my-6 flex justify-around">
                        {/* <DateOfBirth /> */}
                    </div>
                </div>
            ))}
        </>
    );
    return (
        <div className="flex flex-col flex-center">
            {element}
            <button
                onClick={LoginIn}
                className="bg-gray-500 w-[200px] self-center uppercase text-white font-bold py-2"
            >
                sign in
            </button>
        </div>
    );
};

export default LoginInput;
