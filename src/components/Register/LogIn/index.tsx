import { FC } from 'react';

import InputForm from '../Ui/InputForm';
import { IInputProps } from '../SignUp';

const LoginInput: FC<IInputProps> = ({ handleInput }) => {
    const inputsData = [
        { id: 1, label: 'Email', type: 'email', name: 'EMAIL ADDRESS', required: true },
        { id: 4, label: 'Password', type: 'password', name: 'PASSWORD', required: true },
    ];

    const element = (
        <>
            {inputsData.map(item => (
                <div
                    key={item.id}
                    className="self-center"
                >
                    <form className="flex flex-col bo">
                        <InputForm
                            item={item}
                            handleInput={handleInput}
                        />
                    </form>
                    <div className="self-center my-4 flex justify-around">
                        {/* <DateOfBirth /> */}
                    </div>
                </div>
            ))}
        </>
    );
    return <div className="flex flex-col flex-center">{element}</div>;
};

export default LoginInput;
