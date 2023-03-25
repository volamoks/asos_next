import { configureStore } from '@reduxjs/toolkit';

import asosReducer from '../reducers/asosReducer';
import { asosApi } from './../api/asosFetchApi';
import { localAPi } from '../api/localServerApi';

export const store = configureStore({
    reducer: {
        [asosApi.reducerPath]: asosApi.reducer,
        [localAPi.reducerPath]: localAPi.reducer,
        asos: asosReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(asosApi.middleware, localAPi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
