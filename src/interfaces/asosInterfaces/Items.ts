export interface IItems {
    searchTerm: string;
    categoryName: string;
    itemCount: number;
    redirectUrl: string;
    products: Product[];
    facets: Facet[];
    diagnostics: Diagnostics;
    searchPassMeta: SearchPassMeta;
    queryId: any;
    discoverSearchProductTypes: any[];
    campaigns: Campaigns;
}

export interface Product {
    id: number;
    name: string;
    price: Price;
    colour: string;
    colourWayId: number;
    brandName: string;
    hasVariantColours: boolean;
    hasMultiplePrices: boolean;
    groupId: any;
    productCode: number;
    productType: string;
    url: string;
    imageUrl: string;
    videoUrl: any;
    isSellingFast: boolean;
    sponsoredCampaignId: any;
    facetGroupings: FacetGrouping[];
    advertisement: any;
}

export interface Price {
    current: Current;
    previous: Previous;
    rrp: Rrp;
    isMarkedDown: boolean;
    isOutletPrice: boolean;
    currency: string;
}

export interface Current {
    value: number;
    text: string;
}

export interface Previous {
    value: any;
    text: string;
}

export interface Rrp {
    value?: number;
    text: string;
}

export interface FacetGrouping {
    products: Product2[];
    type: string;
}

export interface Product2 {
    productId: number;
}

export interface Facet {
    id: string;
    name: string;
    facetValues: FacetValue[];
    displayStyle: string;
    facetType: string;
    hasSelectedValues: boolean;
}

export interface FacetValue {
    count: number;
    id: string;
    name: string;
    isSelected: boolean;
}

export interface Diagnostics {
    requestId: string;
    processingTime: number;
    queryTime: number;
    recommendationsEnabled: boolean;
    recommendationsAnalytics: RecommendationsAnalytics;
    advertisementsEnabled: boolean;
    advertisementsAnalytics: AdvertisementsAnalytics;
}

export interface RecommendationsAnalytics {
    personalisationStatus: number;
    numberOfItems: number;
    numberOfRecs: number;
    personalisationType: string;
    experimentTrackerkey: string;
    items: any[];
}

export interface AdvertisementsAnalytics {
    status: number;
    customerOptIn: boolean;
    numberOfItemsFromPartner: number;
    items: any[];
    placementBeacons: PlacementBeacons;
}

export interface PlacementBeacons {
    onLoadBeacon: any;
    onViewBeacon: any;
}

export interface SearchPassMeta {
    isPartial: boolean;
    isSpellcheck: boolean;
    searchPass: any[];
    alternateSearchTerms: any[];
}

export interface Campaigns {
    imageTiles: any[];
    promoBanners: any[];
    sponsoredProducts: any[];
}
