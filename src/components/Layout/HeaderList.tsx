import { FC } from 'react';
import Link from 'next/link';
import { ICategory } from '@/interfaces/asosInterfaces/categories';
import ModalListHeaders from './ModalListHeaders';

interface IHeaderProps {
    num: number;
    data: ICategory | undefined;
}
const HeaderList: FC<IHeaderProps> = ({ data, num }) => {
    if (!data) return <div />;

    return (
        <div className="max-w-screen-xl m-auto w-full text-center group/item ">
            <ul className="flex  h-10 mt-2 ">
                {data.navigation[num].children[4].children.map(
                    item =>
                        !item.channelExclusions.includes('webLarge') && (
                            <li
                                key={item.id}
                                className="mx-3 text-white group"
                            >
                                <Link
                                    href="#"
                                    // onClick={() => moveToPage('')}
                                    className="mx-3 text-white hover:cursor-pointer"
                                >
                                    {item.content.title}
                                </Link>
                                <div className=" flex flex-row group w-full relative flex-wrap ">
                                    <ModalListHeaders items={item.children} />
                                </div>
                            </li>
                        ),
                )}
            </ul>
        </div>
    );
};

export default HeaderList;
