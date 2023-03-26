import { IItemIncart } from '@/components/UI/AddToCartButton';

export const setToLocalStorage = (key: string, arr: IItemIncart[]) => {
    localStorage.setItem(key, JSON.stringify(arr.map(item => item)));
};
export const getLocatStorage = (key: string): IItemIncart[] => {
    if (typeof localStorage !== 'undefined') {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
    return [];
};
