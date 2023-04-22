import { IItemPageProps } from '@/components/SingleItemDescription/Interfaces';
import { FC } from 'react';
import Details_item from './Detail_Item';

const Details: FC<IItemPageProps> = ({ item: { info } }) => {
    const details = (
        <>
            <Details_item
                info={info?.aboutMe}
                title={'Title'}
            />
            <Details_item
                info={info?.sizeAndFit}
                title={'Size And Fit'}
            />
            <Details_item
                info={info?.careInfo}
                title={'Care Info'}
            />
        </>
    );

    return <div className="border-gray-100 border-t-2 mt-4">{details}</div>;
};

export default Details;
