import React from 'react';
import SpinneReact from 'react-spinner-material';

const Spinner = () => {
    return (
        <div className="flex w-full h-[calc(100vh-400px-50px)] pt-[200px] justify-center">
            <div className="self-middle">
                <SpinneReact color="gray " />
            </div>
        </div>
    );
};

export default Spinner;
