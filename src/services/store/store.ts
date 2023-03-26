import { configureStore } from '@reduxjs/toolkit';

import asosReducer from '../reducers/asosReducer';
import { asosApi } from './../api/asosFetchApi';
import { localAPi } from '../api/localServerApi';
import { authApi } from './../api/authApi';

export const store = configureStore({
    reducer: {
        [asosApi.reducerPath]: asosApi.reducer,
        [localAPi.reducerPath]: localAPi.reducer,
        [authApi.reducerPath]: authApi.reducer,

        asos: asosReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(asosApi.middleware, localAPi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
