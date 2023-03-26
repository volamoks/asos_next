import { useCreateUserMutation } from '@/services/api/authApi';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import LoginBtns from './Ui/LoginButtons';
// import DateOfBirth from './SignUp/dateOfBirth';
import Input from './Input';

const Register: FC = () => {
    const [user, setUser] = useState({
        user: { email: '', firstName: '', lastName: '', password: '' },
    });

    const router = useRouter();
    console.log(router);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        switch (name) {
            case 'EMAIL ADDRESS':
                setUser({ user: { ...user.user, email: e.target.value } });
                break;
            case 'FIRST NAME':
                setUser({ user: { ...user.user, firstName: e.target.value } });
                break;
            case 'LAST NAME':
                setUser({ user: { ...user.user, lastName: e.target.value } });
                break;
            case 'PASSWORD':
                setUser({ user: { ...user.user, password: e.target.value } });
            default:
                break;
        }
    };

    const [createUser] = useCreateUserMutation();

    const handleSubmint = () => {
        createUser(user);
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
