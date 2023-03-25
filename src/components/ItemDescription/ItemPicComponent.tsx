import { Media } from '@/interfaces/asosInterfaces/item';
import React, { FC } from 'react';

interface IPicsProps {
    data: Media;
}

const ItemPicComponent: FC<IPicsProps> = ({ data }) => {
    const secondaryImg = data.images.map(img => (
        <img
            key={img.url}
            // onClick={() => setActiveImg(img.url)}
            className="w-16 object-contain mb-2"
            src={'http://' + img.url}
            alt="pic"
        />
    ));

    const primaryImg = data.images.map(
        img =>
            img.isPrimary && (
                <img
                    key={img.url}
                    className="w-fill object-contain"
                    src={'http://' + img.url}
                    alt="pic"
                />
            ),
    );
    return (
        <div className="flex justify-betweeen mt-10 w-2/3 sticky">
            <div className="flex flex-col w-1/6">{secondaryImg}</div>
            <div className="flex w-4/6">{primaryImg}</div>
        </div>
    );
};

export default ItemPicComponent;
