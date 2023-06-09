import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Product } from '@/interfaces/asosInterfaces/Items';

import HeartButton from '../../UI/HeartButton';
import PriceComponent from '../UI/PriceComponent';
import { DiscountLabel } from '../UI/DiscountLabel';
import SellingFastLabel from '../UI/SelingFastLabel';
import { IItem } from '@/interfaces/asosInterfaces/item';

interface IItemsProps {
    item: Product | IItem;
}

export const ItemComponent: FC<IItemsProps> = ({ item }) => {
    const getSecondPic = (link: string) => link.split('-').slice(0, -2).join('-') + '-2';
    const router = useRouter();

    const handleGoToPage = (e: React.MouseEvent<HTMLDivElement>, link: number) => {
        e.stopPropagation();
        router.push('/item/' + link);
    };

    if (!item) return <div>No favorites yet...</div>;

    const imagesIItem = () =>
        'media' in item &&
        item.media && (
            <>
                <Image
                    src={'https://' + item.media.images[0].url}
                    alt="mainImage"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </>
        );

    const imagesProduct = () =>
        'imageUrl' in item &&
        item.imageUrl && (
            <>
                <img
                    src={'https://' + item.imageUrl}
                    alt="mainImage"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                />
                <Image
                    className=" w-full h-auto absolute z-1 object-contain  opacity-0 hover:opacity-100 transition duration-300"
                    src={getSecondPic('https://' + item.imageUrl)}
                    alt="secondImage"
                    width="0"
                    height="0"
                    sizes="100vh"
                />
            </>
        );

    return (
        <div
            key={item.id}
            onClick={e => handleGoToPage(e, item.id)}
            className="flex flex-col justify-around relative p-1"
        >
            <div className="flex relative max-w-[300px]">
                {imagesIItem()}
                {imagesProduct()}

                <DiscountLabel item={item} />

                <div className=" absolute right-[10px]  bottom-[10px] ">
                    <HeartButton item={item} />
                </div>
                <div className=" absolute right-0 bottom-[70px] xl:top-[300px]">
                    <SellingFastLabel item={item} />
                </div>
            </div>
            <div className="flex flex-col relative max-w-[300px] p-1">
                <h2 className="mt-2 text-sm text-gray-500 mb-2">{item.name}</h2>
                <PriceComponent item={item} />
            </div>
        </div>
    );
};
