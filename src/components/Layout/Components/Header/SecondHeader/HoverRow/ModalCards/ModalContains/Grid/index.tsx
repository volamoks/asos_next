import { TYPES, IModalContainsProps } from '@/components/Layout/Components/Header/interfaces';
import { FC } from 'react';

const Grid: FC<IModalContainsProps> = ({ item, type, hadleGotoPage }) => {
    const circleGrid =
        type === TYPES.gridCircle &&
        item.map(item => (
            <div
                key={item.id}
                onClick={() => hadleGotoPage(item.link.categoryId)}
                className="flex flex-col text-sm  text-center pb-4 cursor-pointer  hover:text-blue-500 "
            >
                <img
                    src={item.content.webLargeImageUrl}
                    alt="alt2"
                    width={100}
                    height={100}
                    className="rounded-full self-center m-4 hover:border border-blue-500"
                />
                <div>{item.content.title}</div>
            </div>
        ));
    return <div className="grid grid-cols-2">{circleGrid}</div>;
};

export default Grid;
