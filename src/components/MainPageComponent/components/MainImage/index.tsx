import React, { FC } from 'react';
import BigImgButtons from '../../UI/BigImgButtons';
import { IMainImageProps } from '../../interfaces';

const MainImage: FC<IMainImageProps> = ({ storeIndex }) => {
    const MainImg = [
        'https://content.asos-media.com/-/media/hubs/topshop-topman/tstm-march-april-2023/prime-heros/tm/uk-us-row/tm_hero_hp.jpg',
        '',
        'https://content.asos-media.com/-/media/hubs/topshop-topman/tstm-march-april-2023/prime-heros/ts/uk-us-row/ts_hero_hp.jpg',
    ];

    const img = (
        <div className="flex mt-5 mx-auto relative">
            <img
                src={MainImg[storeIndex]}
                alt="mainPicture"
            />
            <BigImgButtons />
            <div className="absolute top-[450px] left-[50px]"></div>
        </div>
    );
    return <div>{img}</div>;
};

export default MainImage;
