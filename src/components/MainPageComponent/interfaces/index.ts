import { Navigation } from '@/interfaces/asosInterfaces/categories';
import { IItems, Product } from '@/interfaces/asosInterfaces/Items';

export interface IMainCardProps {
    item: Product;
    width?: number;
    height?: number;
    isBrandNameShown?: boolean;
}

export interface IMainImageProps {
    storeIndex: number;
}

export interface ISecondatyImageProps {
    data: IItems | undefined;
}

export interface ITopBrandCategoriesProps {
    data: Navigation[] | undefined;
    gender: string;
}
