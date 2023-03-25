import { useGetItemsQuery } from '@/services/api/asosFetchApi';
import Link from 'next/link';
import { FC } from 'react';
import LayoutWrapper from '../Layout/LayoutWrapper';
import ItemComponent from './ItemComponent';
interface IitemsProps {
    id: number;
}

const ItemsList: FC<IitemsProps> = ({ id }) => {
    const { data } = useGetItemsQuery(id);

    const totalNumOfItems = 48;
    const numOnPage = 1;

    if (!data) return <div />;

    return (
        <div className="flex justify-center flex-col">
            <div className="self-center mt-5 text-center">
                <h2>{data.products.length} styles found</h2>
                <p className="text-sm text-center">
                    Learn more about how these products are ranked
                </p>
            </div>

            <ItemComponent
                data={data.products}
                id={id}
            />

            <div className="flex flex-col">
                {data.products.length > totalNumOfItems && (
                    <p className="self-center m-5">
                        You've viewed {numOnPage} of {data.products.length}{' '}
                        products
                    </p>
                )}
                <button className="uppercase border-2 border-gray-700 p-5 justify-center w-60 mx-auto mt-5 font-bold">
                    Load More
                </button>
            </div>
        </div>
    );
};

export default ItemsList;
