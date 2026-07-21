import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        setReviews: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setReviews } = reviewsSlice.actions;

export default reviewsSlice.reducer;