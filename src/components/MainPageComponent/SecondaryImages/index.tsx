import { useAppSelector } from '@/hooks/typedHooks';
import { ICategory } from '@/interfaces/asosInterfaces/categories';
import { FC } from 'react';
import MainCardComp from './ImageCard';

interface ISecondaryImgProps {
    data: ICategory | undefined;
}

const SecondaryImg: FC<ISecondaryImgProps> = ({ data }) => {
    const { storeGen } = useAppSelector(state => state.asos);
    if (!data) return <div />;

    const index = storeGen === 'MEN' ? 0 : 1;

    const images = (
        <div className="grid grid-cols-2 mx-auto max-w-screen-xl md:grid-cols-2 xl:grid-cols-4  my-6 justify-between gap-2">
            {data &&
                data.navigation[index].children[4].children[0].children[2].children
                    .slice(2, 6)
                    .map(product => (
                        <div
                            key={product.id}
                            className="flex flex-col-2"
                        >
                            <MainCardComp
                                item={product}
                                width={300}
                                height={300}
                            />
                        </div>
                    ))}
        </div>
    );
    return <>{images}</>;
};

export default SecondaryImg;
