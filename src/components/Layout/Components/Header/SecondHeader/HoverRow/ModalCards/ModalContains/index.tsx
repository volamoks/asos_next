import { FC } from 'react';

import { useRouter } from 'next/router';

import Grid from './Grid';
import Card from './OneCard';
import TwoCards from './TwoCards';
import CircleList from './CircleList';
import ThreeCards from './ThreeCards';
import List from './List';
import { IModalBlockProps } from '../../../../interfaces';

const ModalContains: FC<IModalBlockProps> = ({ item, type }) => {
    const router = useRouter();

    const hadleGotoPage = (url: number | undefined) => router.push('/items/' + url);

    if (!item) return <div />;

    return (
        <>
            <Grid
                item={item}
                type={type}
                hadleGotoPage={hadleGotoPage}
            />
            <CircleList
                item={item}
                type={type}
                hadleGotoPage={hadleGotoPage}
            />
            <List
                item={item}
                type={type}
                hadleGotoPage={hadleGotoPage}
            />
            <Card
                item={item}
                type={type}
                hadleGotoPage={hadleGotoPage}
            />
            <TwoCards
                item={item}
                type={type}
                hadleGotoPage={hadleGotoPage}
            />
            <ThreeCards
                item={item}
                type={type}
                hadleGotoPage={hadleGotoPage}
            />
        </>
    );
};

export default ModalContains;
