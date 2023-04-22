import { FC, useState } from 'react';

import AddToCartButton from '@/components/UI/AddToCartButton';
import HeartButton from '@/components/UI/HeartButton';
import Details from './Details';
import Price from './Price';
import SizeComponent from './Sizes';

import { IItemPageProps } from '../../Interfaces';

const Description: FC<IItemPageProps> = ({ item }) => {
    // if (!item.variants) return <div />;
    const [size, setSize] = useState('');

    if (!item.variants) return <div></div>;

    setSize(item.variants[0].displaySizeText);

    const addToCart = (
        <div className="flex ">
            <AddToCartButton item={{ ...item, size: size, quantity: 1 }} />
            <HeartButton
                size={'20px'}
                item={item}
            />
        </div>
    );
    return (
        <div className="flex xl:w-1/4  mx-auto p-4">
            <div className="flex flex-col ">
                <Price item={item} />

                <SizeComponent
                    data={item.variants}
                    setSize={setSize}
                    size={size}
                />
                {addToCart}
                <Details item={item} />
            </div>
        </div>
    );
};

export default Description;
