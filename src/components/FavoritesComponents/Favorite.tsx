import { FC } from 'react';

import { useAppSelector } from '@/hooks/typedHooks';

import ItemComponent from '../ItemsPageComponent/Components/ItemCard/ItemComponent/ItemComponent';

const Favorite: FC = () => {
    const { inFav } = useAppSelector(state => state.asos);

    return (
        <div className="max-w-screen-xl mx-auto grid ">
            {!inFav.length && (
                <div className="mx-auto mt-[200px] text-xl">No Favorite items yet..</div>
            )}
            <div className="grid max-w-screen-xl min-h-screen grid-cols-2 xl:grid-cols-4 justify-between gap-5 mt-10 self-center mx-auto mb-10">
                {inFav.map((item, i) => (
                    <div key={item.id}>
                        <ItemComponent item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorite;
