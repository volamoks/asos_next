import { useActions } from '@/hooks/combineActions';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface handleOpenAccount {
    handleOpenAccount: () => void;
}

const CreateAccount: FC<handleOpenAccount> = ({ handleOpenAccount }) => {
    const { setAuthPage } = useActions();
    const router = useRouter();

    const hangleGoTo = (url: string) => {
        handleOpenAccount();
        router.push('/auth');
        setAuthPage(url);
    };
    const create = (
        <>
            <div>
                <button
                    onClick={() => hangleGoTo('login')}
                    className="underline"
                >
                    Log In
                </button>
            </div>
            <div>
                <button
                    onClick={() => hangleGoTo('register')}
                    className="underline"
                >
                    Sign Up
                </button>
            </div>
        </>
    );
    return <div className="flex bg-gray-300 justify-between p-4">{create}</div>;
};

export default CreateAccount;
