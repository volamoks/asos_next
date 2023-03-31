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
        <div className="flex flex-cols-2 ">
            <div className="hidden xl:flex justify-end  xl:w-1/4 ">
                <SecondaryImages
                    images={images}
                    setBigImg={setBigImg}
                />
            </div>
            <div className=" xl:flex justify-center xl:w-3/4 mx-auto">
                <PrimaryImg
                    images={images}
                    bigImage={bigImage}
                    setBigImage={setBigImage}
                />
            </div>
        </div>
    );
};

export default ItemPicComponent;
