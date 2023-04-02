import { useRouter } from 'next/router';
import { FC } from 'react';

interface ILoginBtnsProps {
    isLogin: boolean;
    handleSetLogin: () => void;
}

const LoginBtns: FC<ILoginBtnsProps> = ({ isLogin, handleSetLogin }) => {
    const router = useRouter();

    const buttons = (
        <div className="flex justify-between h-[80px]">
            <button
                onClick={handleSetLogin}
                className={`w-1/2 uppercase  text-gray-400 border-r-2 border-b-2 ${
                    isLogin ? 'text-gray-700 font-bold hover:none border-r-2 border-gray-500' : ''
                } `}
                disabled={isLogin}
            >
                Log In
            </button>
            <button
                onClick={handleSetLogin}
                className={`w-1/2 uppercase   border-b-2  ${
                    !isLogin
                        ? 'text-gray-700 font-bold hover:none border-r-0 border-l-2 border-gray-500'
                        : ''
                } `}
                disabled={!isLogin}
            >
                Sign Up
            </button>
        </div>
    );
    return <>{buttons}</>;
};

export default LoginBtns;
