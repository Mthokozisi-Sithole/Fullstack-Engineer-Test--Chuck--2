import * as actions from "./types";
import Joke from "../../shared/types/joke";
import { AppState } from "../reducers";
import { Dispatch } from "redux";

export const throwJoke = (joke: Joke) => (
  dispatch: Dispatch<actions.AppActions>,
  getState: () => AppState
) => {
  dispatch({
    type: actions.THROW_JOKE,
    payload: joke
  });
};

export const changeCategory = (category: string) => (
  dispatch: Dispatch<actions.AppActions>,
  getState: () => AppState
) => {
  dispatch({
    type: actions.CHANGE_CURRENT_CATEGORY,
    payload: category
  });
};
