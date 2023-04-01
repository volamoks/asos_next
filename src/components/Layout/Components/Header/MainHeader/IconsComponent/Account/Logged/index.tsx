import { useActions } from '@/hooks/combineActions';
import { ILoggedUser } from '@/services/reducers/asosReducer';
import { FC } from 'react';

interface ILoggedProps {
    userData: ILoggedUser;
    handleOpenAccount: () => void;
}

const Logged: FC<ILoggedProps> = ({ userData }) => {
    const { setAuth } = useActions();

    const handleLogout = () => {
        // localStorage.removeItem('userIsLogin');
        setAuth({ ...userData, isAuth: false });
    };

    const loggedAcc = (
        <>
            <div className="font-bold text-xl">Hi {userData.user}</div>
            <div
                onClick={handleLogout}
                className="underline"
            >
                Logout
            </div>
        </>
    );
    return <div className="flex bg-gray-300 justify-between p-4">{loggedAcc}</div>;
};

export default Logged;
