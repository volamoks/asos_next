import { useAppSelector } from '@/hooks/typedHooks';
import { useGetCategoryQuery } from '@/services/api/asosFetchApi';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Spinner from 'react-spinner-material';

import { ITopBrandCategoriesProps } from '../interfaces';

const TopBrandCategories = () => {
    const { data, isLoading } = useGetCategoryQuery('');
    const router = useRouter();
    const storeGen = useAppSelector(state => state.asos.storeGen);
    const i = storeGen === 'MEN' ? 0 : 1;

    if (!data) return <></>;
    if (isLoading)
        return (
            <div>
                <Spinner />
            </div>
        );

    const handleGoToPage = (id: number | undefined) => {
        router.push('/items/' + id);
    };
    const topBrands = (
        <ul className="grid grid-cols-4 gap-4 mt-12 ml-16">
            {data.navigation[i].children[4].children[3].children[1].children
                .slice(3, 23)
                .map(item => (
                    <li
                        key={item.id}
                        onClick={() => handleGoToPage(item.link.categoryId)}
                        className="cursor-pointer"
                    >
                        {storeGen.toLowerCase()}&apos;s {item.content.title}
                    </li>
                ))}
        </ul>
    );
    return (
        <div className="hidden xl:flex  flex-col h-[350px]">
            <h2 className="uppercase text-center mt-12  text-3xl gap-4 font-bold">
                {`Top ${storeGen}'s Categories`}
            </h2>
            {topBrands}
        </div>
    );
};

export default TopBrandCategories;
