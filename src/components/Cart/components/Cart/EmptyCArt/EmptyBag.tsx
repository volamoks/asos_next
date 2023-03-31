import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { BsBag } from 'react-icons/bs';

const EmptyBag = () => {
    const router = useRouter();
    return (
        <div className=" bg-gray-200">
            <div className="flex flex-col max-w-screen-lg mx-auto h-[calc(100vh-400px-50px)]  justify-center ">
                <BsBag
                    size={30}
                    className="self-center m-4"
                />
                <h2 className="font-bold text-2xl text-center">Your bag is empty</h2>
                <span className="self-center mt-4">
                    <h3 className="text-lg text-center w-96">
                        Items remain in your bag for 60 minutes, and then they’re moved to your
                        Saved Items.
                    </h3>
                </span>
                <button
                    onClick={() => router.push('/favorites')}
                    className="bg-green-700 uppercase p-3 text-white font-bold w-1/5 self-center mt-6"
                >
                    view saved items
                </button>
                <Link
                    href="/"
                    className="text-center underline mt-4"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default EmptyBag;
