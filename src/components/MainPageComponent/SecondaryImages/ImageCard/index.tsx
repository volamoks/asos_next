import { Children4 } from '@/interfaces/asosInterfaces/categories';
import item from '@/pages/item/[id]';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface IMainCardProps {
    item: Children4;
    isBrandNameShown?: boolean;
    height: number;
    width: number;
}

const MainCardComp: FC<IMainCardProps> = ({ item, isBrandNameShown = true, width, height }) => {
    const router = useRouter();

    console.log(item);

    if (!item) return <div />;

    const title = isBrandNameShown ? (
        <>
            <h2 className="font-bold  text-base xl:text-lg">{item?.content.title}</h2>
            <p className="text-center text-base xl:text-lg">{item?.content.subTitle}</p>
        </>
    ) : (
        ''
    );

    const element = (
        <button
            key={item.id}
            onClick={() => router.push('/items/' + item.link.categoryId)}
        >
            <img
                className="object-fill"
                src={item?.content?.webLargeImageUrl}
                alt="alt2"
                width={width}
                height={height}
            ></img>
            {title}
        </button>
    );
    return <>{element}</>;
};

export default MainCardComp;
