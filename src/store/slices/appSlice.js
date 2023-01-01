import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  openSidebar: false,
  myWishlist : []
};

export const appSlice = createSlice({
    name : 'app',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            return {
                ...state,
                openSidebar : !state.openSidebar
            }
        },
        addToWishlist: (state, action) => {
            const isAlreadyExist = state.myWishlist.some(w => w.id === action.payload?.id)
            if(isAlreadyExist || !action.payload){
                return {
                    ...state
                }
            }
            return {
                ...state,
                myWishlist : [ ...state.myWishlist, action.payload]
            }
        },
        removeFromWishList : (state, action) => {
            const currentMyWishlist = [...state.myWishlist];
            const _wishlistIndex = currentMyWishlist.findIndex(w => w.id === action.payload.id);
            if(_wishlistIndex > -1) {
                currentMyWishlist.splice(_wishlistIndex,1);
            }
            return {
                ...state,
                myWishlist : currentMyWishlist
            }
        }
    }
});

export const { toggleSidebar, addToWishlist, removeFromWishList } = appSlice.actions;

export default appSlice.reducer
