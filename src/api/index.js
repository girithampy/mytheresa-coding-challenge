// axios
import axios from "../utils/axios";

export const getTop3Movies = () => {
    return axios.get('movie/popular');
}

export const getTopMoviesDetails = (movieId) => {
    return axios.get(`/movie/${movieId}`);
}