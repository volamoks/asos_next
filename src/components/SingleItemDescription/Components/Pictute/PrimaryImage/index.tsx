import { FC, useState } from 'react';
import Image from 'next/image';

import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

import { Image as IImage } from '@/interfaces/asosInterfaces/item';

interface IPrimaryImgProps {
    images: IImage[];
    bigImage: IImage[];
    setBigImage: React.Dispatch<React.SetStateAction<IImage[]>>;
}

const PrimaryImg: FC<IPrimaryImgProps> = ({ images, bigImage, setBigImage }) => {
    const handleChange = (offset: number) => {
        const currIndex = images.indexOf(bigImage[0]);

        const index =
            currIndex + offset > images.length - 1
                ? 0
                : currIndex + offset < 0
                ? images.length - 1
                : currIndex + offset;

        setBigImage(images.filter((_, i) => i === index));
    };

    const primaryImg = (
        <Image
            key={bigImage[0]?.url}
            className="w-fill object-contain"
            src={'http://' + bigImage[0]?.url}
            alt="pic"
            width="510"
            height="600"
        />
    );

    return (
        <div className="flex justify-end xl:ml-8 relative transition transition-transform:translate-x-12  duration-300">
            <button className="absolute top-[300px] right-[20px]">
                <MdArrowForwardIos
                    onClick={() => handleChange(1)}
                    size="30px"
                />
            </button>
            <div> {primaryImg}</div>

            <button className="absolute top-[300px] left-[20px] ">
                <MdArrowBackIos
                    onClick={() => handleChange(-1)}
                    size="30px"
                />
            </button>
        </div>
    );
};

export default PrimaryImg;
