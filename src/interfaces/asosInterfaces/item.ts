export interface IItem {
    id: number;
    name: string;
    description: string;
    alternateNames: AlternateName[];
    localisedData: LocalisedDaum[];
    gender: string;
    productCode: number;
    pdpLayout: string;
    brand: Brand;
    sizeGuide: any;
    sizeGuideApiUrl: any;
    isNoSize: boolean;
    isOneSize: boolean;
    isInStock: boolean;
    countryOfManufacture: any;
    hasVariantsWithProp65Risk: boolean;
    webCategories: WebCategory[];
    variants: Variant[];
    media: Media;
    badges: any[];
    info: Info;
    shippingRestriction: any;
    price: Price2;
    isDeadProduct: boolean;
    rating: any;
    productType: ProductType;
    plpIds: PlpId[];
    baseUrl: string;
}

export interface AlternateName {
    locale: string;
    title: string;
}

export interface LocalisedDaum {
    locale: string;
    title: string;
    pdpUrl: string;
}

export interface Brand {
    brandId: number;
    name: string;
    description: any;
}

export interface WebCategory {
    id: number;
}

export interface Variant {
    id: number;
    name: string;
    sizeId: number;
    brandSize: string;
    sizeDescription: string;
    displaySizeText: string;
    sizeOrder: number;
    sku: string;
    isLowInStock: boolean;
    isInStock: boolean;
    isAvailable: boolean;
    colourWayId: number;
    colourCode: string;
    colour: string;
    price: Price;
    isPrimary: boolean;
    isProp65Risk: boolean;
    ean: any;
    seller: any;
}

export interface Price {
    current: Current;
    previous: Previous;
    rrp: Rrp;
    xrp: Xrp;
    currency: string;
    isMarkedDown: boolean;
    isOutletPrice: boolean;
    startDateTime: string;
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
    value: number;
    text: string;
    versionId: string;
    conversionId: string;
}

export interface Xrp {
    value: number;
    text: string;
    versionId: string;
    conversionId: string;
}

export interface Media {
    images: Image[];
    catwalk: Catwalk[];
    spinset: any[];
    swatchSprite: any[];
}

export interface Image {
    url: string;
    type: string;
    colourWayId?: number;
    colourCode: string;
    colour: string;
    isPrimary: boolean;
}

export interface Catwalk {
    url: string;
    colourWayId: number;
    colourCode: string;
}

export interface Info {
    aboutMe: string;
    sizeAndFit: string;
    careInfo: string;
}

export interface Price2 {
    current: Current2;
    previous: Previous2;
    rrp: Rrp2;
    xrp: Xrp2;
    currency: string;
    isMarkedDown: boolean;
    isOutletPrice: boolean;
    startDateTime: string;
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
    value: number;
    text: string;
    versionId: string;
    conversionId: string;
}

export interface Xrp2 {
    value: number;
    text: string;
    versionId: string;
    conversionId: string;
}

export interface ProductType {
    id: number;
    name: string;
}

export interface PlpId {
    id: number;
    type: string;
}
