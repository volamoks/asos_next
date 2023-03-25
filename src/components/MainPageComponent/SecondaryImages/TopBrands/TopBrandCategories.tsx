import { FC } from 'react';

import { ITopBrandCategoriesProps } from '../../interfaces';

const TopBrandCategories: FC<ITopBrandCategoriesProps> = ({ data, gender }) => {
    const i = gender === 'MEN' ? 0 : 1;

    const topBrands = (
        <>
            <h2 className="uppercase text-center mt-24 text-3xl font-bold">
                Top {gender}'s Categories
            </h2>
            <div className="grid grid-cols-4 ">
                {data &&
                    data[i].children[4].children[3].children[1].children.slice(3, 23).map(item => (
                        <div key={item.id}>
                            {gender.toLowerCase()}'s {item.content.title}
                        </div>
                    ))}
            </div>
        </>
    );
    return <div className="h-[300px]">{topBrands}</div>;
};

export default TopBrandCategories;
