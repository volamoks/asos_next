import { FC } from 'react';
import Image from 'next/image';
import { Image as IImage } from '@/interfaces/asosInterfaces/item';

interface ISecondaryImagesProps {
    images: IImage[];
    setBigImg: (url: string) => void;
}

const SecondaryImages: FC<ISecondaryImagesProps> = ({ images, setBigImg }) => {
    const secondaryImg = images.map(
        img =>
            img && (
                <Image
                    key={img.url}
                    onClick={() => setBigImg(img.url)}
                    className="w-16 object-contain mb-2"
                    src={'http://' + img.url}
                    alt="pic"
                    width="510"
                    height="650"
                />
            ),
    );

    return <div className="flex flex-col ">{secondaryImg}</div>;
};

export default SecondaryImages;
