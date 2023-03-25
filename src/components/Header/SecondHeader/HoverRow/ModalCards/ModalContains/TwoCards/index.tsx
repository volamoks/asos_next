import { IModalContainsProps, TYPES } from '@/components/Header/interfaces';
import { FC } from 'react';

const TwoCards: FC<IModalContainsProps> = ({ item, type, hadleGotoPage }) => {
    const card_x2 =
        type === TYPES.halfMarketingImage &&
        item.map(item => (
            <div
                key={item.id}
                onClick={() => hadleGotoPage(item.link.categoryId)}
                className="flex  text-sm  text-center bg-gradient-to-b from-transparent to-white z-10 relative mb-10 border border-gray-300 hover:border-blue-500 cursor-pointer"
            >
                <img
                    src={item.content.webLargeImageUrl}
                    alt="alt2"
                    className=" self-center relative "
                ></img>
                <div className="absolute  bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute text-gray-700  text-base bottom-2 w-full text-center font-bold uppercase">
                    {item.content.title}
                </div>
            </div>
        ));
    return <div>{card_x2}</div>;
};

export default TwoCards;
