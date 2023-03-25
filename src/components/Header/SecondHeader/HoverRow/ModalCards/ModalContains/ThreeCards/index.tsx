import { IModalContainsProps, TYPES } from '@/components/Header/interfaces';
import { FC } from 'react';

const ThreeCards: FC<IModalContainsProps> = ({ item, type, hadleGotoPage }) => {
    const card_x3 =
        type === TYPES.thirdMarketingImage &&
        item.map(item => (
            <div
                key={item.id}
                onClick={() => hadleGotoPage(item.link.categoryId)}
                className="flex flex-col text-sm  text-center  relative cursor-pointer my-4 border bg-white
                 border-gray-200"
            >
                <div className="">
                    <img
                        src={item?.content?.webLargeImageUrl}
                        alt="alt2"
                        width={350}
                        height={150}
                        className=" self-center relative "
                    ></img>
                </div>

                <div className="absolute text-gray-700 text-base bottom-2 w-3/5  py-4 text-start my-auto font-bold uppercase ">
                    {item.content.title}
                </div>
            </div>
        ));
    return <div>{card_x3}</div>;
};

export default ThreeCards;
