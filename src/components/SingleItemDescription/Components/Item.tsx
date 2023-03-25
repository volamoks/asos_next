import { FC } from 'react';
import { useRouter } from 'next/router';

import { useGetItemQuery } from '@/services/api/asosFetchApi';

import ItemPicComponent from './Pictute/ItemPicComponent';
import Spinner from '../../UI/Spinner';
import Description from './Description';

const Item: FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data: singleItem, isLoading } = useGetItemQuery(id);

    if (!singleItem) return <div />;

    return (
        <div className="flex flex-row mx-auto h-[calc(100vh-400px-50px)]">
            {isLoading && <Spinner />}
            <div className="flex mt-10 justify-center max-w-screen-xl mx-auto">
                <ItemPicComponent data={singleItem.media} />
                <Description item={singleItem} />
            </div>
        </div>
    );
};

export default Item;
