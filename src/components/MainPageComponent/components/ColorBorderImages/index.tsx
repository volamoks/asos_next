import { ISearcModalProps } from '@/components/Header/interfaces';
import { FC } from 'react';
import { ISecondatyImageProps } from '../../interfaces';
import MainCardComp from '../../SecondaryImages/ImageCard';

const ColorBorderImages: FC<ISecondatyImageProps> = ({ data }) => {
    if (!data) return <div />;

    const images = (
        <div className="flex justify-around w-full">
            {data.products.slice(8, 10).map(product => (
                <div
                    key={product.id}
                    className=" flex  border-t-indigo-700 border-t-8  border-r-lime-300 border-r-8  border-b-rose-300 border-b-8  border-l-red-500 border-l-8 "
                >
                    <MainCardComp
                        item={product}
                        height={1200}
                        width={800}
                        isBrandNameShown={false}
                    />
                </div>
            ))}
        </div>
    );
    return <div>{images}</div>;
};

export default ColorBorderImages;
