import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { tvShowReducer } from "./tvShowReducer";

export const rootReducer = combineReducers({
  movie: movieReducer,
  tvShow: tvShowReducer,
});
