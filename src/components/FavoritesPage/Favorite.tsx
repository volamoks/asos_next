import { useAppSelector } from '@/hooks/typedHooks';

import { ItemComponent } from '../ItemsPageComponent/Components/ItemCard/ItemComponent/ItemComponent';
import { EmptyPage } from '../EmptyPage/EmptyPage';

export const FavoritePage = () => {
    const inFav = useAppSelector(state => state.asos.inFav);

    if (!inFav.length) return <EmptyPage />;

    const favoritePageContent = (
        <div className="grid max-w-screen-xl min-h-screen grid-cols-2 xl:grid-cols-4 justify-between gap-5 mt-10 self-center mx-auto mb-10">
            {inFav.map((item, i) => (
                <div key={item.id}>
                    <ItemComponent item={item} />
                </div>
            ))}
        </div>
    );

    return <div className="max-w-screen-xl mx-auto grid ">{favoritePageContent}</div>;
};
