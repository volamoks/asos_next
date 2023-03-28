import React from 'react';

const Logged = ({ name }) => {
    const loggedAcc = (
        <div className="flex bg-gray-300 justify-between p-4">
            <div className="font-bold text-xl">Hi {name}</div>
            <button className="underline">Logout</button>
        </div>
    );
    return <>{loggedAcc}</>;
};

export default Logged;
