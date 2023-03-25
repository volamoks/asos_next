import { FC } from 'react';

import { Product } from '@/interfaces/asosInterfaces/Items';
import { AiOutlineHeart } from 'react-icons/ai';
import Link from 'next/link';

interface IitemsProps {
    data: Product[];
    id: number;
}

const ItemComponent: FC<IitemsProps> = ({ data }) => {
    const getSeconPic = (link: string) =>
        link.split('-').slice(0, -2).join('-') + '-2';

    return (
        <div className="grid max-w-screen-xl grid-cols-4 justify-between gap-5 mt-10 self-center mx-auto">
            {data.map(item => (
                <Link
                    key={item.id}
                    href={'/items/' + item.id}
                    id={item.id + ''}
                >
                    <div
                        key={item.id}
                        // onClick={() => movetoPage(item.id)}
                        className="flex flex-col relative"
                    >
                        <img
                            className="object-contain "
                            src={'https://' + item.imageUrl}
                            alt="pic"
                        />
                        <img
                            src={getSeconPic('https://' + item.imageUrl)}
                            className="absolute z-10 object-contain  opacity-0 hover:opacity-100 transition duration-300"
                        ></img>
                        <button className="bg-white/80 w-8 h-8 rounded-2xl absolute bottom-[85px] right-2 z-20 flex justify-center alight-center">
                            <AiOutlineHeart size="25px" />
                        </button>

                        <h2 className="mt-2">{item.name}</h2>
                        <p className="text-gray-500 font-bold">
                            {item.price.currency} {item.price.current.value}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ItemComponent;
