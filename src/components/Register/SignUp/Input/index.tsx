import { ChangeEvent, FC } from 'react';
import InputForm from '../Ui/InputForm';

interface IInputProps {
    handleInput: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const Input: FC<IInputProps> = ({ handleInput }) => {
    const inputsData = [
        { id: 1, type: 'email', name: 'EMAIL ADDRESS', required: true },
        { id: 2, type: 'text', name: 'FIRST NAME', required: false },
        { id: 3, type: 'text', name: 'LAST NAME', required: false },
        { id: 4, type: 'password', name: 'PASSWORD', required: true },
    ];
    const input = inputsData.map(item => (
        <>
            <InputForm
                item={item}
                handleInput={handleInput}
            />
        </>
    ));
    return <>{input}</>;
};

export default Input;
