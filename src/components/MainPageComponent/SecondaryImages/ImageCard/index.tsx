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
            onClick={() => router.push('/items/' + item.id)}
        >
            <img
                className="w-full object-fill"
                src={'http://' + item.imageUrl}
                alt="alt2"
                width={width}
                height={height}
                sizes="100%"
            ></img>
            {title}
        </button>
    );
    return <>{element}</>;
};

export default MainCardComp;
