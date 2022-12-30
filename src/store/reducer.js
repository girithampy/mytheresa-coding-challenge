import { combineReducers} from "@reduxjs/toolkit";

// Reducers
import moviesReducer from "./slices/moviesSlice";
import movieDetailsReducer from "./slices/movieDetailsSlice";
import wishlistReducer from "./slices/wishlistSlice";

export default combineReducers({
    movies : moviesReducer,
    movieDetails : movieDetailsReducer,
    wishlist : wishlistReducer,
});