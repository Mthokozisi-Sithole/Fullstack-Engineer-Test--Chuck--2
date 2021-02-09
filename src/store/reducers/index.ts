import { combineReducers } from "redux";
import jokeReducer from "./jokeReducer";
import currentCategoryReducer from "./currentCategoryReducer";

const rootReducer = combineReducers({
  joke: jokeReducer,
  currentCategory: currentCategoryReducer
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
