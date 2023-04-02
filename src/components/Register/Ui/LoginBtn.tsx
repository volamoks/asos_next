import { useRouter } from 'next/router';
import { FC } from 'react';

interface ILoginBtnsProps {
    isLogin: boolean;
    handleSetLogin: () => void;
    buttonName: string;
}

const LoginBtn: FC<ILoginBtnsProps> = ({ buttonName, isLogin, handleSetLogin }) => {
    const router = useRouter();

    const buttons = (
        <>
            <button
                onClick={handleSetLogin}
                className={`w-1/2 uppercase  text-gray-400 border-r-2 border-b-2 ${
                    isLogin ? 'text-gray-700 font-bold hover:none border-r-2 border-gray-500' : ''
                } `}
                disabled={isLogin}
            >
                {buttonName}
            </button>
        </>
    );
    return <>{buttons}</>;
};

export default LoginBtn;
