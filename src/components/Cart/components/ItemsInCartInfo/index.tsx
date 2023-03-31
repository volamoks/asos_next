import { FC } from 'react';
import { ICartProps } from '../../interfaces';
import Delivery from './Delivery/Delivery';
import ItemsInCart from './ItemsInCart';
import ViewAll from './ViewAll/ViewAll';

const CartItems: FC<ICartProps> = ({ items, total }) => {
    return (
        <div className="flex flex-col  xl:w-3/5  xl:mr-3 xl:mt-3">
            <ItemsInCart
                data={items}
                total={+total.toFixed(2)}
            />
            <Delivery />

        </div>
    );
};

export default CartItems;
