import { IItemIncart } from '@/components/UI/AddToCartButton';

export interface ISizeAndQtyProps {
    item: IItemIncart;
}

export interface ICartProps {
    items: IItemIncart[];
    total: number;
}
