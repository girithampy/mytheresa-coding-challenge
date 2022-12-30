import axios from "axios";
// Config
import appConfig from "../config";

axios.defaults.baseURL = `${appConfig.API.BASE_URL}/`;

axios.interceptors.request.use((config) => {
    config.url = `${config.url}?api_key=${appConfig.API.KEY}`
    return config;
},(error) => Promise.reject(error));

export default axios;