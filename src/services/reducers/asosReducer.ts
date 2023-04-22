import { IItemIncart } from '@/components/UI/AddToCartButton';
import { IItem } from '@/interfaces/asosInterfaces/item';
import { Product } from '@/interfaces/asosInterfaces/Items';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum TYPES_REDUCER_ACTIONS {
    IN_CART = 'inCart',
    IN_FAV = 'inFav',
    LOGGED_USER = 'userIsLogin',
    STORE_GEN = 'storeGen',
}

export interface ILoggedUser {
    isAuth: boolean;
    firstName?: null | string;
    lastName?: null | string;
    email?: null | string;
    id?: null | string;
}
export interface IInitialstate {
    storeGen: string;
    inBag: IItemIncart[];
    inFav: Product[] | IItem[];
    filters: string[];
    loggedUser: ILoggedUser;
    authPage: string;
    isBgLocked?: boolean;
}

const initialState: IInitialstate = {
    storeGen: 'WOMEN',
    inBag: [],
    inFav: [],
    filters: [],
    loggedUser: { isAuth: false },
    authPage: 'login',
    isBgLocked: false,
};

export const asosSlice = createSlice({
    name: 'asos',
    initialState,
    reducers: {
        setstoreGen: (state, action) => {
            state.storeGen = action.payload;
        },
        addToBag: (state, action: PayloadAction<IItemIncart>) => {
            const index = state.inBag.findIndex(item => item.id === action.payload.id);
            index >= 0 ? state.inBag.splice(index, 1) : state.inBag.push(action.payload);
        },
        addToFav: (state, action: PayloadAction<Product | IItem>) => {
            const index = state.inFav.findIndex(item => item.id === action.payload.id);
            index >= 0 ? state.inFav.splice(index, 1) : state.inFav.push(action.payload);
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filters.includes(action.payload)
                ? (state.filters = state.filters.filter(filter => filter !== action.payload))
                : state.filters.push(action.payload);
        },
        changeSizeAndQuantity: (
            state,
            action: PayloadAction<{
                id: number;
                size?: string | undefined;
                quantity?: number | undefined;
            }>,
        ) => {
            const index = state.inBag.findIndex(item => item.id === action.payload.id);
            if (index >= 0) {
                state.inBag[index].size = action.payload?.size;
                state.inBag[index].quantity = action.payload?.quantity;
            }
        },

        setAuth: (state, action: PayloadAction<ILoggedUser>) => {
            state.loggedUser = action.payload;
        },
        setAuthPage: (state, action: PayloadAction<string>) => {
            state.authPage = action.payload;
        },
        lockBg: (state, action: PayloadAction<boolean>) => {
            state.isBgLocked = action.payload;
        },
    },
});

export const actions = asosSlice;
export default asosSlice.reducer;
