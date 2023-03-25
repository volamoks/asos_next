import { IModalContainsProps, TYPES } from '@/components/Header/interfaces';
import { FC } from 'react';

const List: FC<IModalContainsProps> = ({ item, type, hadleGotoPage }) => {
    const list =
        type === TYPES.textList &&
        item.slice(0, 10).map(list => (
            <div
                key={list.id}
                onClick={() => hadleGotoPage(list.link.categoryId)}
                className={`grid grid-cols-2 text-sm  text-start m-4 cursor-pointer hover:text-blue-500 `}
            >
                <div className="">{list.content.title}</div>
            </div>
        ));
    return <div>{list}</div>;
};

export default List;
