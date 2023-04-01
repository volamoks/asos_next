import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link
            href={'/'}
            className=""
        >
            <Image
                className="w-20 h-auto object-contain mr-20 fill-white "
                src="/asos_logo.png"
                alt="asos"
                width={67}
                height={20}
            />
        </Link>
    );
};

export default Logo;
