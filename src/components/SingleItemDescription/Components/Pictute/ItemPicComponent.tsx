import { Media } from '@/interfaces/asosInterfaces/item';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import PrimaryImg from './PrimaryImage';
import SecondaryImages from './SecondaryImages';

interface IPicsProps {
    data: Media;
}

const ItemPicComponent: FC<IPicsProps> = ({ data: { images } }) => {
    const [bigImage, setBigImage] = useState(images.filter(item => item.isPrimary));

    const setBigImg = (url: string) => {
        setBigImage(images.filter(item => item.url === url));
    };

    return (
        <div className="flex justify-end mt-10 w-2/4 sticky">
            <SecondaryImages
                images={images}
                setBigImg={setBigImg}
            />
            <PrimaryImg
                images={images}
                bigImage={bigImage}
                setBigImage={setBigImage}
            />
        </div>
    );
};

export default ItemPicComponent;
