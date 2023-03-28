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

const MainListItems = () => {
    const { data: categoryData } = useGetcategoryQuery('');
    const { storeGen } = useAppSelector(state => state.asos);

    const storeIndex = storeGen === 'MEN' ? 0 : 2;
    const catIndex = 20;

    const selectedCategory =
        categoryData?.brands[storeIndex].children[catIndex].link.categoryId?.toString();

    const { data: selectedCategoryData, isLoading } = useGetItemsQuery(selectedCategory);

    if (!selectedCategoryData) return <div className=" max-w-screen-xl min-h-screen " />;

    return (
        <div className=" max-w-screen-xl min-h-[calc(100vh-400px-50px)] mx-auto relative">
            <div className="flex flex-col">
                <MainImage storeIndex={storeIndex} />
                <SecondaryImg data={selectedCategoryData} />
                <ColorBorderImages data={selectedCategoryData} />
                <TopBrandCategories
                    data={categoryData?.navigation}
                    gender={storeGen}
                />
            </div>
        </div>
    );
};

export default MainListItems;
