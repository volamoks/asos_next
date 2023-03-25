import { ICategory } from '@/interfaces/asosInterfaces/categories';
import { IItem } from '@/interfaces/asosInterfaces/item';
import { IItems } from '@/interfaces/asosInterfaces/Items';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const asosApi = createApi({
    reducerPath: 'asosApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://asos2.p.rapidapi.com/',
        prepareHeaders: headers => {
            headers.set(
                'X-RapidAPI-Key',
                '45415c91e3msh61f43b05809ade3p111704jsna4d33bfd4f34',
            );
            headers.set('X-RapidAPI-Host', 'asos2.p.rapidapi.com');
        },
    }),
    endpoints: builder => ({
        getItems: builder.query<IItems, string | number>({
            query: id => ({
                url: '/products/v2/list',
                params: {
                    store: 'US',
                    offset: '0',
                    categoryId: id,
                    limit: '48',
                    country: 'US',
                    sort: 'freshness',
                    currency: 'USD',
                    sizeSchema: 'US',
                    lang: 'en-US',
                },
            }),
        }),

        getItem: builder.query<IItem, string | string[] | undefined>({
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

        getcategory: builder.query<ICategory, string>({
            query: () => ({
                url: '/categories/list',
                params: { country: 'US', lang: 'en-US' },
            }),
        }),
    }),
});

export const { useGetcategoryQuery, useGetItemsQuery, useGetItemQuery } =
    asosApi;