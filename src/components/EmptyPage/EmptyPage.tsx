import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { BsBag } from 'react-icons/bs';
import { useAppSelector } from '@/hooks/typedHooks';

export const EmptyPage = () => {
    const router = useRouter();
    const { pathname } = useRouter();

    const inFav = useAppSelector(state => state.asos.inFav);

    const emptyPageDescription = () => {
        if (pathname === '/cart') return 'Your bag is empty';
        if (pathname === '/favorites') return 'No favorite items yet';
    };

    const gotoFavorites = () => {
        if (pathname !== '/cart' || !inFav.length) return <div></div>;

        return (
            <button
                onClick={() => router.push('/favorites')}
                className="bg-green-700 uppercase p-3 text-white font-bold w-3/5 xl:w-2/5 self-center mt-6"
            >
                view saved items
            </button>
        );
    };

    return (
        <>
            <div className="flex flex-col max-w-screen-lg mx-auto xl:h-[calc(100vh-400px-50px)]  h-screen justify-center ">
                <BsBag
                    size={30}
                    className="self-center m-4"
                />
                <h2 className="font-bold text-2xl text-center mb-6">{emptyPageDescription()}</h2>

                {gotoFavorites()}
                <Link
                    href="/"
                    className="text-center underline mt-4"
                >
                    Continue Shopping
                </Link>
            </div>
        </>
    );
};
