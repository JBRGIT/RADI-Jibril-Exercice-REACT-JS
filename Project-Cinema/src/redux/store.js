import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoritesSlice";

const store = configureStore({
  reducer: combineReducers({
    favorite: favoriteReducer,
  }),
});

export default store;
