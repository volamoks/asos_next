import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    }),
});

export const { useCreateUserMutation } = authApi;
