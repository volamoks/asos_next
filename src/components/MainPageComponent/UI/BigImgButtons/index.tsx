import { useRouter } from 'next/router';
import React from 'react';

const BigImgButtons = () => {
    const router = useRouter();

    const btnArr = [
        { id: 1, title: 'New In' },
        { id: 2, title: 'Shop Asos' },
    ];

    const btn = (
        <>
            {btnArr.map(item => (
                <button
                    key={item.id}
                    onClick={() => router.push('/items/50698')}
                    className=" bg-white font-bold p-2 text-base xl:text-xl xl:py-4 xl:px-12 "
                >
                    {item.title}
                </button>
            ))}
        </>
    );
    return <div className="absolute bottom-[15px]  flex gap-2 justify-center w-full">{btn}</div>;
};

export default BigImgButtons;
