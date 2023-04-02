import { FC } from 'react';

interface IInputProps {
    item: { id: number; label: string; type: string; name: string; required: boolean };
    handleInput: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}
const InputForm: FC<IInputProps> = ({ item, handleInput }) => {
    return (
        <>
            <label className="font-medium text-gray-500 text-lg ">{item.name}</label>

            <input
                className="border border-gray-400  text-gray-500 text-xl w-[300px] h-[40px] p-4"
                type={item.type}
                id={item.label}
                autoComplete="new-password"
                required
                onChange={e => handleInput(e, item.name)}
            />
        </>
    );
};

export default InputForm;
