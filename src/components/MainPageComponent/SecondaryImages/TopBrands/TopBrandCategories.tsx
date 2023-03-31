import { useRouter } from 'next/router';
import { FC } from 'react';

import { ITopBrandCategoriesProps } from '../../interfaces';

const TopBrandCategories: FC<ITopBrandCategoriesProps> = ({ data, gender }) => {
    const router = useRouter();
    const i = gender === 'MEN' ? 0 : 1;

    const store = gender.split('').slice(1, -1).join('');
    const hadleGoToPage = (id: number | undefined) => {
        router.push('/items/' + id);
    };
    const topBrands = (
        <>
            <h2 className="uppercase text-center mt-12  text-3xl gap-4 font-bold">
                {`Top ${store}'s Categories`}
            </h2>
            <ul className="grid grid-cols-4 gap-4 mt-12 ml-16">
                {data &&
                    data[i].children[4].children[3].children[1].children.slice(3, 23).map(item => (
                        <li
                            key={item.id}
                            onClick={() => hadleGoToPage(item.link.categoryId)}
                            className="cursor-pointer"
                        >
                            {store.toLowerCase()}'s {item.content.title}
                        </li>
                    ))}
            </ul>
        </>
    );
    return <div className="hidden xl:flex  flex-col h-[350px]">{topBrands}</div>;
};

export default TopBrandCategories;
