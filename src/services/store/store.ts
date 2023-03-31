import { configureStore } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import asosReducer, { IInitialstate } from '../reducers/asosReducer';
import { asosApi } from './../api/asosFetchApi';
import { localAPi } from '../api/localServerApi';
import { authApi } from './../api/authApi';
import storage from 'redux-persist/lib/storage';

const persistConfig: PersistConfig<IInitialstate> = {
    key: 'root',
    storage,
    whitelist: ['asos'],
};

const persistedReducer = persistReducer(persistConfig, asosReducer);

export const store = configureStore({
    reducer: {
        [asosApi.reducerPath]: asosApi.reducer,
        [localAPi.reducerPath]: localAPi.reducer,
        [authApi.reducerPath]: authApi.reducer,

        asos: persistedReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(asosApi.middleware, localAPi.middleware, authApi.middleware),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
