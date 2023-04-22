import { FC } from 'react';
import { useRouter } from 'next/router';

import { useGetItemQuery } from '@/services/api/asosFetchApi';

import ItemPicComponent from './Pictute/ItemPicComponent';
import { Spinner } from '../../UI/Spinner';
import Description from './Description';

export const ItemComponent: FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data: singleItem, isLoading } = useGetItemQuery(id);

    if (isLoading) return <Spinner />;

    if (!singleItem || !singleItem.media) return <div />;

    return (
        <div className=" md:min-h-[calc(100vh-390px)] xl:min-h-[calc(100vh-400px)]">
            {isLoading && <Spinner />}
            <div className="flex flex-col  md:flex-row md:mt-10 justify-center max-w-screen-xl mx-auto md:gap-4 md:p-4">
                <ItemPicComponent data={singleItem.media} />
                <Description item={singleItem} />
            </div>
        </div>
    );
};
