import { Children3, Children4 } from '@/interfaces/asosInterfaces/categories';
import { ISearch } from '@/interfaces/asosInterfaces/search';

export interface IModalBlockProps {
    item: Children4[];
    type: string | undefined;
}

export interface ISearcModalProps {
    isOpen: boolean;
    data: ISearch | undefined;
    setClose: () => void;
}

export interface IModalListHeadersProps {
    items: Children3[];
    isModal: boolean;
}
export interface IModalContainsProps {
    item: Children4[];
    type: string | undefined;
    hadleGotoPage: (arg0: number | undefined) => void;
}

export enum TYPES {
    gridCircle = 'gridCircleImageLarge',
    textList = 'textList',
    circleList = 'circleImageListLarge',
    halfMarketingImage = 'halfMarketingImage',
    thirdMarketingImage = 'thirdMarketingImage',
    fullMarketingImage = 'fullMarketingImage',
    imageCardsWithDescriptionLarge = 'imageCardsWithDescriptionLarge',
}
