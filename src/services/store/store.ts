import { configureStore } from '@reduxjs/toolkit';

import asosReducer from '../reducers/asosReducer';
import { asosApi } from './../api/asosFetchApi';

export const store = configureStore({
    reducer: {
        [asosApi.reducerPath]: asosApi.reducer,
        asos: asosReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(asosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
