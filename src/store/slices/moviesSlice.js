import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// API
import { getTop3Movies } from "../../api";

const initialState = {
    loading: true,
    list: [],
};

export const fetchTop3Movies = createAsyncThunk(
    'movies/top3Movies',
    async (_, thunkAPI) => {
        const response = await getTop3Movies();
        if (response.data?.results?.length > 0) {
            return response.data.results.slice(0, 3);
        }
        return thunkAPI.rejectWithValue([]);
    }
)


export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTop3Movies.fulfilled, (state, action) => {
            return {
                ...state,
                loading : false,
                list: [...action.payload]
            }
        });
    }
});

export default moviesSlice.reducer


