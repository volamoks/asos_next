import { FC } from 'react';

import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import Link from 'next/link';
import { BsBag, BsFillBagFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/typedHooks';

const IconsComponent: FC = () => {
    const router = useRouter();

    const { inBag } = useAppSelector(state => state.asos);

    const hadleGoToPage = (link: string) => {
        router.push(link);
    };
    return (
        <div className="flex w-1/5 justify-end self-center mr-4">
            <div className="mr-4 cursor-pointer">
                <IoPersonOutline
                    // onClick={() => hadleGoToPage('/account')}
                    size="30px"
                    color="white"
                />
            </div>
            <div className="mr-4 cursor-pointer">
                <AiOutlineHeart
                    onClick={() => hadleGoToPage('/favorites')}
                    size="30px"
                    color="white"
                />
            </div>

            <div className="mr-4 cursor-pointer">
                {inBag.length > 0 ? (
                    <BsFillBagFill
                        onClick={() => hadleGoToPage('/cart')}
                        size="30px"
                        color="white"
                    />
                ) : (
                    <BsBag
                        onClick={() => hadleGoToPage('/cart')}
                        size="30px"
                        color="white"
                    />
                )}
            </div>
        </div>
    );
};

export default IconsComponent;
