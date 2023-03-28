import { useCreateUserMutation } from '@/services/api/authApi';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import LoginBtns from './Ui/LoginButtons';
// import DateOfBirth from './SignUp/dateOfBirth';
import Input from './Input';
import { nanoid } from '@reduxjs/toolkit';

const Register: FC = () => {
    const [user, setUser] = useState({
        id: nanoid(),
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });

    const router = useRouter();

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
            default:
                break;
        }
    };

    const [createUser, { data }] = useCreateUserMutation();

    console.log(data);

    const handleSubmint = () => {
        const userData = { ...user };

        createUser(userData)
            .unwrap()
            .then(() => {})
            .then(error => {
                console.log(error);
            });
    };

    const element = (
        <div className="w-screen h-screen bg-gray-200 flex justify-center pt-[100px]">
            <div className="flex flex-col  w-[700px] bg-white h-[1000px] p-12">
                <LoginBtns />
                <h2 className="text-xl text-black text-center uppercase font-bold m-12">
                    Sign up with Email
                </h2>
                <Input handleInput={handleInput} />
                <div className="self-center my-6 flex justify-around">{/* <DateOfBirth /> */}</div>
                <button
                    onClick={handleSubmint}
                    className="bg-gray-500 w-[200px] self-center text-white font-bold py-2"
                >
                    Submit
                </button>
            </div>
        </div>
    );
    return <div>{element}</div>;
};

export default Register;
