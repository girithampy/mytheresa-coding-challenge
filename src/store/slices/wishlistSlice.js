import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
};

export const counterSlice = createSlice({
    name : 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state) => {
            return {
                ...state
            }
        },
        removeFromWishList : (state, action) => {
            return {
                ...state
            }
        }
    }
});

export const { addToWishlist, removeFromWishList } = counterSlice.actions;

export default counterSlice.reducer
