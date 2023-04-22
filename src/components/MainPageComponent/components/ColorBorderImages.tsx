import { FC } from 'react';

import { useAppSelector } from '@/hooks/typedHooks';
import { ICategory } from '@/interfaces/asosInterfaces/categories';
import MainCardComp from './ItemCard';
import { useGetCategoryQuery } from '@/services/api/asosFetchApi';

export const ColorBorderImages = () => {
    const { data, isLoading } = useGetCategoryQuery('');
    const storeGen = useAppSelector(state => state.asos.storeGen);
    if (!data) return <div />;

    const index = storeGen === 'MEN' ? 0 : 1;
    const images = data.navigation[index].children[4].children[0].children[2].children
        .slice(7, 9)
        .map(product => (
            <div key={product.id}>
                <div className=" flex  border-t-indigo-700 border-t-8  border-r-lime-300 border-r-8  border-b-rose-300 border-b-8  border-l-red-500 border-l-8 ">
                    <MainCardComp
                        item={product}
                        height={1200}
                        width={800}
                        isBrandNameShown={false}
                    />
                </div>
                <div>
                    <h2 className="text-xl font-bold uppercase text-center">
                        {product?.content.title}
                    </h2>
                </div>
            </div>
        ));
    return (
        <div className="flex  justify-between">
            <div className="flex flex-col m-4 gap-2 md:flex-row xl:m-24 w-full">{images}</div>
        </div>
    );
};
