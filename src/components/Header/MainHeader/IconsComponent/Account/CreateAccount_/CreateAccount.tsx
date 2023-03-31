import { useRouter } from 'next/router';

const CreateAccount = () => {
    const router = useRouter();

    const hangleGoTo = (url: string) => {
        router.push(url);
    };
    const create = (
        <>
            <div>
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
        </>
    );
    return <div className="flex bg-gray-300 justify-between p-4">{create}</div>;
};

export default CreateAccount;
