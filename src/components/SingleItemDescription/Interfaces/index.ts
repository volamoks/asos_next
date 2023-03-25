import { IItem, Variant } from '@/interfaces/asosInterfaces/item';
import { Dispatch, SetStateAction } from 'react';

export interface IItemPageProps {
    item: IItem;
}
export interface SizesProps {
    data: Variant[];
    setSize: Dispatch<SetStateAction<string>>;
    size: string | undefined;
}
