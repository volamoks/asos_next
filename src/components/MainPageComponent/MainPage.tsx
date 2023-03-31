import Link from 'next/link';

import { useAppSelector } from '@/hooks/typedHooks';
import { useGetcategoryQuery, useGetItemsQuery } from '@/services/api/asosFetchApi';
import { useGetLocalCategoryQuery } from '@/services/api/localServerApi';

import MainCardComp from './SecondaryImages/ImageCard';
import TopBrandCategories from './SecondaryImages/TopBrands/TopBrandCategories';
import BigImgButtons from './UI/BigImgButtons';
import SecondaryImg from './SecondaryImages';
import ColorBorderImages from './components/ColorBorderImages';
import MainImage from './components/MainImage';
import Spinner from '../UI/Spinner';

const MainListItems = () => {
    const { data: categoryData, isLoading } = useGetcategoryQuery('');
    const { storeGen } = useAppSelector(state => state.asos);

    const storeIndex = storeGen === 'MEN' ? 0 : 2;

    if (isLoading) return <Spinner />;
    if (!categoryData) return <div className=" max-w-screen-xl min-h-screen " />;

    console.log(categoryData);

    return (
        <div className=" sm:width-full xl:max-w-screen-xl xl:min-h-[calc(100vh-400px-50px)] mx-auto relative ">
            <div className="flex flex-col">
                <MainImage storeIndex={storeIndex} />
                <SecondaryImg data={categoryData} />
                <ColorBorderImages data={categoryData} />
                <TopBrandCategories
                    data={categoryData?.navigation}
                    gender={storeGen}
                />
            </div>
        </div>
    );
};

export default MainListItems;
