import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const partnersSlice = createSlice({
    name: 'partners',
    initialState,
    reducers: {
        setPartners: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setPartners } = partnersSlice.actions;

export default partnersSlice.reducer;