import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const loginDBurl = process.env.DB_LINK;
// console.log(loginDBurl);

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: builder => ({
        createUser: builder.mutation({
            query: user => ({
                url: '/register',
                method: 'POST',
                body: user,
            }),
        }),
        getUsers: builder.query({
            query: () => ({
                url: '/current',
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
