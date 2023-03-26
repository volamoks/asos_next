import { FC } from 'react';

interface IInputProps {
    item: { id: number; type: string; name: string; required: boolean };
    handleInput: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}
const InputForm: FC<IInputProps> = ({ item, handleInput }) => {
    return (
        <div
            key={item.id}
            className="self-center my-6 "
        >
            <h3 className="font-medium text-gray-500 text-lg ">{item.name}</h3>
            <input
                className="border border-gray-200  text-gray-500 text-xl w-[300px] h-[40px] p-4"
                type={item.type}
                required
                onChange={e => handleInput(e, item.name)}
            />
        </div>
    );
};

export default InputForm;
