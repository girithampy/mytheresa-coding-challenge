import { combineReducers} from "@reduxjs/toolkit";

// Reducers
import appReducer from "./slices/appSlice";
import moviesReducer from "./slices/moviesSlice";
import movieDetailsReducer from "./slices/movieDetailsSlice";
import wishlistReducer from "./slices/wishlistSlice";

export default combineReducers({
    app : appReducer,
    movies : moviesReducer,
    movieDetails : movieDetailsReducer,
    wishlist : wishlistReducer,
});