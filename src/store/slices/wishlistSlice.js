import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
};

export const wishlistSlice = createSlice({
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

export const { addToWishlist, removeFromWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer
