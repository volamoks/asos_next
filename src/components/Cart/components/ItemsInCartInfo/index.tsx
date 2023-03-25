import { FC } from 'react';
import { ICartProps } from '../../interfaces';
import Delivery from './Delivery/Delivery';
import ItemsInCart from './ItemsInCart';
import ViewAll from './ViewAll/ViewAll';

const CartItems: FC<ICartProps> = ({ items, total }) => {
    return (
        <div className="flex flex-col w-3/5  mr-3 mt-3">
            <ItemsInCart
                data={items}
                total={total}
            />
            <Delivery />
            <ViewAll />
        </div>
    );
};

export default CartItems;
