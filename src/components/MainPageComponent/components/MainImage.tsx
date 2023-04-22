import React, { FC } from 'react';
import BigImgButtons from '../UI/BigImgButtons';

import { useAppSelector } from '@/hooks/typedHooks';

const MainImg = [
    'https://content.asos-media.com/-/media/hubs/topshop-topman/tstm-march-april-2023/prime-heros/tm/uk-us-row/tm_hero_hp.jpg',
    '',
    'https://content.asos-media.com/-/media/hubs/topshop-topman/tstm-march-april-2023/prime-heros/ts/uk-us-row/ts_hero_hp.jpg',
];

export const MainImage = () => {
    const storeGen = useAppSelector(state => state.asos.storeGen);
    const storeIndex = storeGen === 'MEN' ? 0 : 2;

    const img = <></>;
    return (
        <div className="flex mt-5 mx-auto relative">
            <img
                src={MainImg[storeIndex]}
                alt="mainPicture"
            />
            <BigImgButtons />
        </div>
    );
};

export default MainImage;
