import Spinner from '@/components/UI/Spinner';
import { FC } from 'react';
import { ISecondatyImageProps } from '../interfaces';
import MainCardComp from './ImageCard';

const SecondaryImg: FC<ISecondatyImageProps> = ({ data }) => {
    const images = (
        <div className="flex max-w-screen-xl  my-6 justify-between">
            {data &&
                data.products.slice(0, 4).map(product => (
                    <div key={product.id}>
                        <MainCardComp item={product} />
                    </div>
                ))}
        </div>
    );
    return <>{images}</>;
};

export default SecondaryImg;
