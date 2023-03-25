import { useRouter } from 'next/router';
import React from 'react';

const BigImgButtons = () => {
    const router = useRouter();

    const btn = (
        <>
            <button
                onClick={() => router.push('/items/50698')}
                className=" bg-white font-bold text-xl py-4 px-12 mx-2"
            >
                New In
            </button>

            <button
                onClick={() => router.push('/items/17413')}
                className=" bg-white font-bold text-xl py-4 px-12 "
            >
                Shop Asos
            </button>
        </>
    );
    return <div className="absolute top-[500px] left-[500px] flex">{btn}</div>;
};

export default BigImgButtons;
