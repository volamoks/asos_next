import { createSlice } from '@reduxjs/toolkit';

interface IInitialstate {
    state: string;
}

const initialState: IInitialstate = {
    state: '1',
};
export const asosSlice = createSlice({
    name: 'asos',
    initialState,
    reducers: {},
});

export const actions = asosSlice;
export default asosSlice.reducer;
