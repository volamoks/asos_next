import { FC, useState } from 'react';
import { useRouter } from 'next/router';

import { useGetItemsQuery } from '@/services/api/asosFetchApi';

import { Spinner } from '../UI/Spinner';

import SelectBar from './Components/SelectBar';
import { ItemComponent } from './Components/ItemComponent';

const ItemsList: FC = () => {
    const [cardsOnPage, setCardsOnPage] = useState(16);
    const router = useRouter();
    const { catId: id } = router.query;

    const { data, isError, isLoading } = useGetItemsQuery({ id, cardsOnPage });

    if (!data) return <div />;
    if (isLoading) return <Spinner />;
    if (isError) return <div>Some error...</div>;

    const total = data.itemCount;

    const handleClick = () => {
        setCardsOnPage(cardsOnPage + 12);
    };

    const loadMore = (
        <div className="flex flex-col">
            {cardsOnPage < total && (
                <p className="self-center m-6">
                    You have viewed {cardsOnPage} of {total} products
                </p>
            )}
            <button
                onClick={handleClick}
                className="uppercase border-2 border-gray-700 p-5 justify-center w-60 mx-auto mb-10 font-bold"
            >
                Load More
            </button>
        </div>
    );

    const itemsGrid = (
        <div
            className="grid max-w-screen-xl grid-cols-2 xl:grid-cols-4 justify-between gap-2 
                            xl:gap-6 mt-10 self-center mx-auto mb-10 relative"
        >
            {data.products.map((item, i) => (
                <div key={item.id}>
                    <ItemComponent item={item} />
                </div>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen">
            <h2 className="text-black text-2xl text-center font-bold my-10 ">
                {data.categoryName}
            </h2>
            <SelectBar data={data.facets} />
            <div className="flex justify-center flex-col  relative">
                <div className="flex flex-col md:flex-cols-4 min-h-screen ">
                    <div className="self-center xl:mt-5 text-center">
                        <h2>{total} styles found</h2>
                    </div>
                    {itemsGrid}
                </div>
            </div>
            {loadMore}
        </div>
    );
};

export default ItemsList;
