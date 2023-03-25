export interface ISimularItems {
    id: number;
    products: Product[];
    navigateUrl: any;
    baseUrl: string;
}

export interface Product {
    order: number;
    product: Product2;
}

export interface Product2 {
    id: number;
    name: string;
    brandId: number;
    brandName: string;
    images: Image[];
    price: Price;
    sizeGuide: any;
    isNoSize: boolean;
    isOneSize: boolean;
    isInStock: boolean;
    hasMultipleColoursInStock: boolean;
    hasMultiplePricesInStock: boolean;
    isAvailable: boolean;
    productCode: string;
    colour: string;
    variants: Variant[];
    shippingRestriction: any;
    navigateUrl: any;
    rating: any;
    localisedData: any;
}

export interface Image {
    url: string;
    type: string;
    colourWayId?: number;
    colourCode?: string;
    colour?: string;
    isPrimary: boolean;
}

export interface Price {
    current: Current;
    previous: Previous;
    rrp: Rrp;
    xrp: Xrp;
    currency: string;
    isMarkedDown: boolean;
    isOutletPrice: boolean;
    startDateTime: any;
    previousEndDate: any;
    lowestPriceInLast30DaysValue: any;
    lowestPriceInLast30DaysText: any;
    lowestPriceInLast30DaysEndDate: any;
    lowestPriceInLast30DaysPercentage: any;
    wasPriceStartDate: any;
}

export interface Current {
    value: number;
    text: string;
    versionId: string;
    conversionId: string;
}

export interface Previous {
    value: number;
    text: string;
    versionId: string;
    conversionId: string;
}

export interface Rrp {
    value: any;
    text: any;
    versionId: string;
    conversionId: string;
}

export interface Xrp {
    value: number;
    text: string;
    versionId: string;
    conversionId: string;
}

export interface Variant {
    id: number;
    name: string;
    sizeId: number;
    brandSize: string;
    sizeDescription: any;
    displaySizeText: string;
    sizeOrder: number;
    sku: string;
    isLowInStock: boolean;
    isInStock: boolean;
    isAvailable: boolean;
    colourWayId: number;
    colourCode: string;
    colour: string;
    price: Price2;
    isPrimary: boolean;
    isProp65Risk: boolean;
    ean: any;
    seller: any;
}

export interface Price2 {
    current: Current2;
    previous: Previous2;
    rrp: Rrp2;
    xrp: Xrp2;
    currency: string;
    isMarkedDown: boolean;
    isOutletPrice: boolean;
    startDateTime: any;
    previousEndDate: any;
    lowestPriceInLast30DaysValue: any;
    lowestPriceInLast30DaysText: any;
    lowestPriceInLast30DaysEndDate: any;
    lowestPriceInLast30DaysPercentage: any;
    wasPriceStartDate: any;
}

export interface Current2 {
    value: number;
    text: string;
    versionId: string;
    conversionId: string;
}

export interface Previous2 {
    value: number;
    text: string;
    versionId: string;
    conversionId: string;
}

export interface Rrp2 {
    value: any;
    text: any;
    versionId: string;
    conversionId: string;
}

export interface Xrp2 {
    value: number;
    text: string;
    versionId: string;
    conversionId: string;
}
