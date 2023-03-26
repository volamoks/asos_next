import React from 'react';
import InputForm from '../../SignUp/Ui/InputForm';

const LoginInput = () => {
    const handleInput = () => {};
    const inputsData = [
        { id: 1, type: 'email', name: 'EMAIL ADDRESS', required: true },
        { id: 4, type: 'password', name: 'PASSWORD', required: true },
    ];
    return (
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
                </div>
            ))}
        </>
    );
};

export default LoginInput;
