export interface ICategory {
    navigation: Navigation[];
    brands: Brand[];
    footer: Footer[];
}

export interface Navigation {
    id: string;
    alias: string;
    type: string;
    channelExclusions: any[];
    webLargePriority: number;
    content: Content;
    display: any;
    style: Style;
    link: Link;
    children: Children[];
}

export interface Content {
    title: string;
    subTitle: any;
    webLargeImageUrl: any;
    mobileImageUrl: any;
}

export interface Style {
    webLargeStyleType: string;
    mobileStyleType: string;
}

export interface Link {
    linkType: string;
    brandSectionAlias: any;
    categoryId: any;
    webUrl: string;
    appUrl: any;
}

export interface Children {
    id: string;
    alias?: string;
    type: string;
    channelExclusions: string[];
    webLargePriority: number;
    content: Content2;
    display: Display;
    style: Style2;
    link: any;
    children: Children2[];
}

export interface Content2 {
    title: string;
    subTitle: any;
    webLargeImageUrl: any;
    mobileImageUrl: any;
}

export interface Display {
    webLargeTemplateId: number;
    webLargeTemplateName: string;
    webLargeColumnSpan: number;
    mobileTemplateId: number;
    mobileTemplateName: string;
    mobileDisplayLayout: string;
}

export interface Style2 {
    webLargeStyleType: string;
    mobileStyleType: string;
}

export interface Children2 {
    id: string;
    alias?: string;
    type: string;
    channelExclusions: string[];
    webLargePriority: number;
    content: Content3;
    display: any;
    style: Style3;
    link: Link2;
    children: Children3[];
}

export interface Content3 {
    title: string;
    subTitle?: string;
    webLargeImageUrl: string;
    mobileImageUrl: string;
}

export interface Style3 {
    webLargeStyleType: string;
    mobileStyleType: string;
}

export interface Link2 {
    linkType?: string;
    brandSectionAlias?: string;
    categoryId?: number;
    webUrl?: string;
    appUrl?: string;
}

export interface Children3 {
    id: string;
    alias: any;
    type: string;
    channelExclusions: string[];
    webLargePriority: number;
    content: Content4;
    display: Display2;
    style: Style4;
    link: any;
    children: Children4[];
}

export interface Content4 {
    title: string;
    subTitle: any;
    webLargeImageUrl: any;
    mobileImageUrl: any;
}

export interface Display2 {
    webLargeTemplateId: number;
    webLargeTemplateName: string;
    webLargeColumnSpan: number;
    mobileTemplateId: number;
    mobileTemplateName: string;
    mobileDisplayLayout: string;
}

export interface Style4 {
    webLargeStyleType: string;
    mobileStyleType: string;
}

export interface Children4 {
    id: string;
    alias?: string;
    type: string;
    channelExclusions: string[];
    webLargePriority: number;
    content: Content5;
    display: any;
    style: Style5;
    link: Link3;
    children: any[];
}

export interface Content5 {
    title: string;
    subTitle?: string;
    webLargeImageUrl?: string;
    mobileImageUrl?: string;
}

export interface Style5 {
    webLargeStyleType: string;
    mobileStyleType: string;
}

export interface Link3 {
    linkType: string;
    brandSectionAlias?: string;
    categoryId?: number;
    webUrl: string;
    appUrl?: string;
}

export interface Brand {
    id: string;
    alias: string;
    type: string;
    channelExclusions: any[];
    webLargePriority: number;
    content: Content6;
    display: Display3;
    style: Style6;
    link: any;
    children: Children5[];
}

export interface Content6 {
    title: string;
    subTitle: any;
    webLargeImageUrl: any;
    mobileImageUrl: any;
}

export interface Display3 {
    webLargeTemplateId: number;
    webLargeTemplateName: string;
    webLargeColumnSpan: number;
    mobileTemplateId: number;
    mobileTemplateName: string;
    mobileDisplayLayout: string;
}

export interface Style6 {
    webLargeStyleType: string;
    mobileStyleType: string;
}

export interface Children5 {
    id: string;
    alias: any;
    type: string;
    channelExclusions: any[];
    webLargePriority: number;
    content: Content7;
    display: any;
    style: Style7;
    link: Link4;
    children: any[];
}

export interface Content7 {
    title: string;
    subTitle: any;
    webLargeImageUrl: any;
    mobileImageUrl: any;
}

export interface Style7 {
    webLargeStyleType?: string;
    mobileStyleType?: string;
}

export interface Link4 {
    linkType: string;
    brandSectionAlias: any;
    categoryId?: number;
    webUrl: string;
    appUrl: string;
}

export interface Footer {
    id: string;
    alias: any;
    type: string;
    channelExclusions: any[];
    webLargePriority: number;
    content: Content8;
    display: Display4;
    style: Style8;
    link: any;
    children: Children6[];
}

export interface Content8 {
    title: string;
    subTitle: any;
    webLargeImageUrl: any;
    mobileImageUrl: any;
}

export interface Display4 {
    webLargeTemplateId: number;
    webLargeTemplateName: string;
    webLargeColumnSpan: number;
    mobileTemplateId: number;
    mobileTemplateName: string;
    mobileDisplayLayout: string;
}

export interface Style8 {
    webLargeStyleType: string;
    mobileStyleType: string;
}

export interface Children6 {
    id: string;
    alias?: string;
    type: string;
    channelExclusions: any[];
    webLargePriority: number;
    content: Content9;
    display: any;
    style: Style9;
    link: Link5;
    children: any[];
}

export interface Content9 {
    title: string;
    subTitle: any;
    webLargeImageUrl: any;
    mobileImageUrl: any;
}

export interface Style9 {
    webLargeStyleType: string;
    mobileStyleType: string;
}

export interface Link5 {
    linkType: string;
    brandSectionAlias: any;
    categoryId: any;
    webUrl: string;
    appUrl?: string;
}
