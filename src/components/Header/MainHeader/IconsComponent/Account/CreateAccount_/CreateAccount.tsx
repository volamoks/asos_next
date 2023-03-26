import { useRouter } from 'next/router';
import React from 'react';

const CreateAccount = () => {
    const router = useRouter();

    const hangleGoTo = (url: string) => {
        router.push(url);
        
    };
    const create = (
        <div className="flex bg-gray-300 justify-between p-4">
            <div>
                {' '}
                <button
                    onClick={() => hangleGoTo('/login')}
                    className="underline"
                >
                    Log In
                </button>
            </div>
            <div>
                <button
                    onClick={() => hangleGoTo('/register')}
                    className="underline"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
    return <>{create}</>;
};

export default CreateAccount;
