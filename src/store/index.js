import { configureStore } from '@reduxjs/toolkit'
// Reducers
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;