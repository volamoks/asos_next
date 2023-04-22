import { ICategory } from '@/interfaces/asosInterfaces/categories';
import { IItem } from '@/interfaces/asosInterfaces/item';
import { IItems } from '@/interfaces/asosInterfaces/Items';
import { ISearch } from '@/interfaces/asosInterfaces/search';
import { ISimularItems } from '@/interfaces/asosInterfaces/simularItems';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IGetItemsProps {
    id: string | string[] | undefined;
    cardsOnPage?: number;
}

export const asosApi = createApi({
    reducerPath: 'asosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://asos2.p.rapidapi.com/',
        prepareHeaders: headers => {
            headers.set('X-RapidAPI-Key', '45415c91e3msh61f43b05809ade3p111704jsna4d33bfd4f34');
            headers.set('X-RapidAPI-Host', 'asos2.p.rapidapi.com');
        },
    }),

    endpoints: builder => ({
        getItems: builder.query<IItems, IGetItemsProps>({
            query: ({ id, cardsOnPage = 24 }) => ({
                url: '/products/v2/list',
                params: {
                    store: 'US',
                    offset: '0',
                    categoryId: id,
                    limit: cardsOnPage,
                    country: 'US',
                    sort: 'freshness',
                    currency: 'USD',
                    sizeSchema: 'US',
                    lang: 'en-US',
                },
            }),
        }),

        getItem: builder.query<IItem, IGetItemsProps>({
            query: id => ({
                url: '/products/v3/detail',
                params: {
                    id: id,
                    lang: 'en-US',
                    store: 'US',
                    sizeSchema: 'US',
                    currency: 'USD',
                },
            }),
        }),

        getCategory: builder.query<ICategory, string>({
            query: () => ({
                url: '/categories/list',
                params: { country: 'US', lang: 'en-US' },
            }),
        }),
        getSimularItems: builder.query<ISimularItems, IGetItemsProps>({
            query: id => ({
                url: 'https://asos2.p.rapidapi.com/products/v3/list-similarities',
                params: {
                    id: id,
                    store: 'US',
                    sizeSchema: 'US',
                    currency: 'USD',
                    lang: 'en-US',
                },
            }),
        }),
        getSearchItems: builder.query<ISearch, string | string[] | undefined>({
            query: request => ({
                url: 'https://asos2.p.rapidapi.com/v2/auto-complete',
                params: {
                    q: request,
                    store: 'US',
                    country: 'US',
                    currency: 'USD',
                    sizeSchema: 'US',
                    lang: 'en-US',
                },
            }),
        }),
    }),
});

export const {
    useGetCategoryQuery,
    useGetItemsQuery,
    useGetItemQuery,
    useGetSimularItemsQuery,
    useGetSearchItemsQuery,
} = asosApi;
