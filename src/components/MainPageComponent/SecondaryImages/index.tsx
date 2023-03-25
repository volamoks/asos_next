import { FC } from 'react';
import { ISecondatyImageProps } from '../interfaces';
import MainCardComp from './ImageCard';

const SecondaryImg: FC<ISecondatyImageProps> = ({ data }) => {
    const images = (
        <div className="flex max-w-screen-xl my-6 justify-between">
            {data && data.products.slice(0, 4).map(product => <MainCardComp item={product} />)}
        </div>
    );
    return <>{images}</>;
};

export default SecondaryImg;
