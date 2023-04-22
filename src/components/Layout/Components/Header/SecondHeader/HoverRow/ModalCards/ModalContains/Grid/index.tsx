import { TYPES, IModalContainsProps } from '@/components/Layout/Components/Header/interfaces';
import Image from 'next/image';
import { FC } from 'react';

const Grid: FC<IModalContainsProps> = ({ item, type, hadleGotoPage }) => {
    if (!item) return null;
    
    const circleGrid =
        type === TYPES.gridCircle &&
        item.map(item => (
            <div
                key={item.id}
                onClick={() => hadleGotoPage(item.link.categoryId)}
                className="flex flex-col text-sm  text-center pb-4 cursor-pointer  hover:text-blue-500 "
            >
                {item?.content?.webLargeImageUrl && (
                    <Image
                        src={item?.content?.webLargeImageUrl}
                        alt="alt2"
                        width={100}
                        height={100}
                        className="rounded-full self-center m-4 hover:border border-blue-500"
                    />
                )}
                <div>{item.content.title}</div>
            </div>
        ));
    return <div className="grid grid-cols-2">{circleGrid}</div>;
};

export default Grid;
