import { useAppSelector } from '@/hooks/typedHooks';

import { useGetCategoryQuery } from '@/services/api/asosFetchApi';

import Spinner from 'react-spinner-material';
import MainCardComp from './ItemCard';

export const SecondaryImg = () => {
    const { data, isLoading } = useGetCategoryQuery('');
    const { storeGen } = useAppSelector(state => state.asos);

    if (!data) return <div />;
    if (isLoading) return <Spinner />;

    const index = storeGen === 'MEN' ? 0 : 1;

    const images = data.navigation[index].children[4].children[0].children[2].children
        .slice(2, 6)
        .map(product => (
            <div
                key={product.id}
                className="flex flex-col-2 xl:hover:scale-105 transition-all"
            >
                <MainCardComp
                    item={product}
                    width={300}
                    height={300}
                />
            </div>
        ));

    return (
        <div className="grid grid-cols-2 mx-auto max-w-screen-xl md:grid-cols-2 xl:grid-cols-4  my-6 justify-between gap-2">
            {images}
        </div>
    );
};

export default SecondaryImg;
