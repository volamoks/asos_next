import { IItemIncart } from '@/components/UI/AddToCartButton';

export interface IItemsInCartProps {
    item: IItemIncart;
}

export interface ICartProps {
    items: IItemIncart[];
    total: number;
}
