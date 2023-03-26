import { useRouter } from 'next/router';
import { FC } from 'react';
import { IMainCardProps } from '../../interfaces';

const MainCardComp: FC<IMainCardProps> = ({
    item,
    width = 300,
    height = 400,
    isBrandNameShown = true,
}) => {
    const router = useRouter();

    const title = isBrandNameShown ? (
        <>
            <h2 className="font-bold text-2xl text-center">{item.brandName}</h2>
            <p className="text-center text-lg">{item.sponsoredCampaignId}</p>
        </>
    ) : (
        ''
    );

    const element = (
        <button
            key={item.id}
            onClick={() => router.push('/item/' + item.id)}
        >
            <img
                className="min-w-[300px] min-h-[400px] object-fill"
                src={'http://' + item.imageUrl}
                alt="alt2"
                width={width}
                height={height}
                sizes="100%"
            ></img>
            {title}
        </button>
    );
    return <div className="min-w-[300px] min-h-[400px]">{element}</div>;
};

export default MainCardComp;
