import { IItemIncart } from '@/components/UI/AddToCartButton';
import { IItem } from '@/interfaces/asosInterfaces/item';
import { Product } from '@/interfaces/asosInterfaces/Items';

export const setToLocalStorage = (key: string, arr: IItemIncart[] | IItem[] | Product[]) => {
    if (arr.length) localStorage.setItem(key, JSON.stringify(arr.map(item => item)));
};
export const getLocatStorage = (key: string) => {
    const data = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    return data ? JSON.parse(data) : null;
};
