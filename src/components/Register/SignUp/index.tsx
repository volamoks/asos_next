import { ChangeEvent, FC } from 'react';
import InputForm from '../Ui/InputForm';

export interface IInputProps {
    handleInput: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}
const inputsData = [
    { id: 1, label: 'email', type: 'email', name: 'EMAIL ADDRESS', required: true },
    { id: 2, label: 'firstName', type: 'text', name: 'FIRST NAME', required: false },
    { id: 3, label: 'lastName', type: 'text', name: 'LAST NAME', required: false },
    { id: 4, label: 'password', type: 'password', name: 'PASSWORD', required: true },
];

const Input: FC<IInputProps> = ({ handleInput }) => {
    const input = inputsData.map(item => (
        <div
            key={item.id}
            className="  self-center my-4 "
        >
            <form className="flex flex-col">
                <InputForm
                    item={item}
                    handleInput={handleInput}
                />
            </form>
        </div>
    ));
    return <>{input}</>;
};

export default Input;
