import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: ""
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setPopup: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setPopup } = popupSlice.actions

export default popupSlice.reducer