import { FC } from 'react';
import { useRouter } from 'next/router';

import { useGetItemsQuery } from '@/services/api/asosFetchApi';

import Spinner from '../UI/Spinner';
import ItemCard from './Components/ItemCard';
import SelectBar from './Components/Select/SelectBar';
import ViewMore from './Components/ViewMore';

const ItemsList: FC = () => {
    const router = useRouter();
    const { catId } = router.query;

    const { data, isError, isLoading } = useGetItemsQuery(catId);

    if (isLoading) return <Spinner />;
    if (isError) return <div>Some error...</div>;
    if (!data) return <div />;

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
            <ViewMore total={data.itemCount} />
        </div>
    );

    return (
        <>
            <div className="flex justify-center flex-col  relative">{itemsList}</div>
        </>
    );
};

export default ItemsList;
