import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// API
import { getTopMoviesDetails } from "../../api";

const initialState = {
    loading: true,
    data: null,
};

export const fetchMovieDetails = createAsyncThunk(
    'movies/details',
    async (movieId) => {
        const response = await getTopMoviesDetails(movieId);
        return response.data;
    }
)


export const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {
        toggleLoader : (state) => {
            return {
                ...state,
                loading : !state.loading
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
            return {
                ...state,
                loading : false,
                data: action.payload
            }
        });
    }
});

export const { toggleLoader } = movieDetailsSlice.actions

export default movieDetailsSlice.reducer


