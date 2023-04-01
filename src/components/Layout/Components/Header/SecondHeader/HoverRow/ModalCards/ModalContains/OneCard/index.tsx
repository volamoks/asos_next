import { TYPES, IModalContainsProps } from '@/components/Layout/Components/Header/interfaces';
import { FC } from 'react';

const Card: FC<IModalContainsProps> = ({ item, type, hadleGotoPage }) => {
    const card =
        type === TYPES.fullMarketingImage &&
        item.slice(0, 1).map(item => (
            <div
                key={item.id}
                onClick={() => hadleGotoPage(item.link.categoryId)}
                className="flex  text-sm  text-center bg-gradient-to-b w-full z-10 relative border border-gray-300 hover:border-blue-500 cursor-pointer"
            >
                <img
                    src={item.content.webLargeImageUrl}
                    alt="alt2"
                    width={400}
                    height={400}
                    className=" self-center relative mx-auto"
                />
                <div className="absolute  bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-white"></div>
                <div className="absolute text-gray-700 text-lg bottom-6 w-full text-center font-bold uppercase">
                    {item.content.title}
                </div>
            </div>
        ));
    return <div>{card}</div>;
};

export default Card;
