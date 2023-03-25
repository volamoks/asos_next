import { useGetSimularItemsQuery } from '@/services/api/asosFetchApi';
import { FC } from 'react';
import ItemComponent from '../../../ItemsPageComponent/Components/ItemCard/ItemComponent/ItemComponent';

interface ISimListProps {
    id: string | string[] | undefined;
}
const SimularItems: FC<ISimListProps> = ({ id }) => {
    const { data } = useGetSimularItemsQuery(id);

    return <div>SimularItems</div>;
};

export default SimularItems;
