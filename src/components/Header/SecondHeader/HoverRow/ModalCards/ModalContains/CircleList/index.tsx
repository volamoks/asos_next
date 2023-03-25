import { IModalContainsProps, TYPES } from '@/components/Header/interfaces';
import { FC } from 'react';

const CircleList: FC<IModalContainsProps> = ({ item, type, hadleGotoPage }) => {
    const circleLsit =
        type === TYPES.circleList &&
        TYPES.imageCardsWithDescriptionLarge &&
        item.slice(0, 5).map(item => (
            <div
                key={item.id}
                onClick={() => hadleGotoPage(item.link.categoryId)}
                className="flex  text-sm  text-center my-2 hover:text-blue-500 cursor-pointer"
            >
                <img
                    src={item.content.webLargeImageUrl}
                    alt="alt2"
                    width={70}
                    height={70}
                    className="rounded-full self-center hover:border border-blue-500"
                />
                <div className="self-center ml-4 hover:text-blue-500">{item.content.title}</div>
            </div>
        ));
    return <div>{circleLsit}</div>;
};

export default CircleList;
