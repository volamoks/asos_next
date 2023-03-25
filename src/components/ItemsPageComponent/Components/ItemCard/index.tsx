import { FC } from 'react';

import ItemComponent from './ItemComponent/ItemComponent';

import { IItems } from '@/interfaces/asosInterfaces/Items';

interface ItemCardProps {
    data: IItems;
    total: number | undefined;
}
const ItemCard: FC<ItemCardProps> = ({ data, total }) => {
    const itemsCard = (
        <>
            <div className="self-center mt-5 text-center">
                <h2>{total} styles found</h2>
                <p className="text-sm text-center">
                    Learn more about how these products are ranked
                </p>
            </div>
            <div className="grid max-w-screen-xl grid-cols-4 justify-between gap-5 mt-10 self-center mx-auto mb-10">
                {data.products.map((item, i) => (
                    <div key={item.id}>
                        <ItemComponent item={item} />
                    </div>
                ))}
            </div>
        </>
    );
    return <div>{itemsCard}</div>;
};

export default ItemCard;
