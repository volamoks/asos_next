import { FC, useState } from 'react';
import { useRouter } from 'next/router';

import { useGetItemsQuery } from '@/services/api/asosFetchApi';

import { Spinner } from '../UI/Spinner';
import ItemCard from './Components/ItemCard';
import SelectBar from './Components/Select/SelectBar';
import ViewMore from './Components/ViewMore';

const ItemsList: FC = () => {
    const [cardsOnPage, setCardsOnPage] = useState(16);
    const router = useRouter();
    const { catId: id } = router.query;
    console.log('List page render');

    const { data, isError, isLoading } = useGetItemsQuery({ id, cardsOnPage });

    if (isLoading) return <Spinner />;
    if (isError) return <div>Some error...</div>;
    if (!data) return <div />;

    const total = data.itemCount;

    const handleClick = () => {
        setCardsOnPage(cardsOnPage + 12);
    };

    const loadMoreButton = (
        <button
            onClick={handleClick}
            className="uppercase border-2 border-gray-700 p-5 justify-center w-60 mx-auto mb-10 font-bold"
        >
            Load More
        </button>
    );

    const itemsList = (
        <div className="min-h-screen">
            <h2 className="text-black text-2xl text-center font-bold my-10 ">
                {data.categoryName}
            </h2>
            <SelectBar data={data.facets} />
            <ItemCard
                data={data}
                total={data.itemCount}
            />

            <div className="flex flex-col">
                {cardsOnPage < total && (
                    <p className="self-center m-6">
                        You have viewed {cardsOnPage} of {total} products
                    </p>
                )}
                {loadMoreButton}
            </div>
        </div>
    );

    return (
        <>
            <div className="flex justify-center flex-col  relative">{itemsList}</div>
        </>
    );
};

export default ItemsList;
