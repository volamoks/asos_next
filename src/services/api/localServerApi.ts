import { ICategory } from '@/interfaces/asosInterfaces/categories';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const localAPi = createApi({
    reducerPath: 'localApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
    }),
    endpoints: builder => ({
        getLocalCategory: builder.query<ICategory, string>({
            query: () => ({
                url: '/data',
            }),
        }),
    }),
});

export const { useGetLocalCategoryQuery } = localAPi;
