import { FC } from 'react';
import { useRouter } from 'next/router';

import { Product } from '@/interfaces/asosInterfaces/Items';

import HeartButton from '../../../../UI/HeartButton';
import PriceComponent from '../../UI/PriceComponent';
import DiscountLabel from '../../UI/DiscountLabel';
import SellingFastLabel from '../../UI/SelingFastLabel';

interface IitemsProps {
    item: Product;
}

const ItemComponent: FC<IitemsProps> = ({ item }) => {
    const getSeconPic = (link: string) => link.split('-').slice(0, -2).join('-') + '-2';
    const router = useRouter();

    const hadleGoToPage = (e: React.MouseEvent<HTMLDivElement>, link: number) => {
        e.stopPropagation();
        router.push('/item/' + link);
    };

    !item && <div />;

    return (
        <div
            key={item.id}
            onClick={e => hadleGoToPage(e, item.id)}
            id={item.id + ''}
        >
            <div
                key={item.id}
                className="flex flex-col relative"
            >
                <img
                    className="object-contain "
                    src={'https://' + item.imageUrl}
                    alt="pic"
                />
                <img
                    src={getSeconPic('https://' + item.imageUrl)}
                    className="absolute z-5 object-contain  opacity-0 hover:opacity-100 transition duration-300"
                ></img>
                <div className=" absolute  top-[20px]">
                    <DiscountLabel item={item} />
                </div>
                <div className=" absolute right-2 top-[340px]">
                    <HeartButton item={item} />
                </div>
                <div className=" absolute right-0 top-[300px]">
                    <SellingFastLabel item={item} />
                </div>

                <h2 className="mt-2 text-sm text-gray-500 mb-2">{item.name}</h2>
                <PriceComponent item={item} />
            </div>
        </div>
    );
};

export default ItemComponent;
