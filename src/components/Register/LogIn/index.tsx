import React from 'react';
import LoginBtns from '../SignUp/Ui/LoginButtons';
import LoginInput from './LoginInput';

const Login = () => {
    const handleSubmint = () => {};
    const element = (
        <div className="w-screen h-screen bg-gray-200 flex justify-center pt-[100px]">
            <div className="flex flex-col  w-[700px] bg-white h-[700px] p-12">
                <LoginBtns />
                <h2 className="text-xl text-black text-center uppercase font-bold m-12">
                    Sign in with Email
                </h2>
                <LoginInput />
                <div className="self-center my-6 flex justify-around">{/* <DateOfBirth /> */}</div>
                <button
                    onClick={handleSubmint}
                    className="bg-gray-500 w-[200px] self-center uppercase text-white font-bold py-2"
                >
                    sign in
                </button>
            </div>
        </div>
    );
    return <div>{element}</div>;
};

export default Login;
