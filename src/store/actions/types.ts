import Joke from "../../shared/types/joke";

export const THROW_JOKE = "THROW_JOKE";
export const CHANGE_CURRENT_CATEGORY = "CHANGE_CURRENT_CATEGORY";

export interface ThrowJokeAction {
  type: typeof THROW_JOKE;
  payload: Joke;
}

export interface ChangeCurrentCategoryAction {
  type: typeof CHANGE_CURRENT_CATEGORY;
  payload: string;
}

export type JokerActionTypes = ThrowJokeAction | ChangeCurrentCategoryAction;

export type AppActions = JokerActionTypes;
