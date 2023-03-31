import { IItem } from '@/interfaces/asosInterfaces/item';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TYPEs_OF_SET_ITEMS } from '../helpers/setItemsOfUser';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: builder => ({
        createUser: builder.mutation({
            query: user => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
        }),
        getUsers: builder.query({
            query: request => ({
                url: '/users',
                params: { email: request },
            }),
        }),
        setItems: builder.mutation({
            query: ({ item, userId }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: { items: { inFAv: [item] } },
            }),
        }),
        setItemsInCart: builder.mutation({
            query: ({ item, userId }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: { items: { inCart: [item] } },
            }),
        }),
        setItemsInFav: builder.mutation({
            query: ({ item, userId }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: { items: { inFAv: [item] } },
            }),
        }),
        getAllItems: builder.query({
            query: () => ({
                url: `/users`,
            }),
        }),
    }),
});

export const {
    useCreateUserMutation,
    useGetUsersQuery,
    useSetItemsMutation,
    useSetItemsInCartMutation,
    useSetItemsInFavMutation,
    useGetAllItemsQuery,
} = authApi;
