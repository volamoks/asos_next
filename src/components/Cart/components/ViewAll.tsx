import { FC } from 'react';
import { useRouter } from 'next/router';

export const ViewAllSavedItemsCard: FC = () => {
    const router = useRouter();

    const viewAll = (
        <>
            <span className="uppercase font-bold text-lg text-gray-700 ">
                WONDERING WHERE YOUR ITEMS HAVE GONE?
            </span>
            <span className=" mt-10 text-gray-700">
                No worries – you&apos;ll find them in your Saved Items.
            </span>

            <button
                onClick={() => router.push('/favorites')}
                className="mt-7 uppercase font-bold xl:self-start px-8 py-4 border-2 border-gray-400 "
            >
                view all saved Items
            </button>
        </>
    );

    return <div className="flex flex-col mt-5  item-middle xl:justify-start p-2">{viewAll}</div>;
};
