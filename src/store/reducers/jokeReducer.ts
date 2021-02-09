import * as actions from "../actions/types";
import Joke from "../../shared/types/joke";

export default (
  state: Joke | null = null,
  action: actions.ThrowJokeAction
): Joke | null => {
  switch (action.type) {
    case actions.THROW_JOKE:
      return action.payload;
    default:
      return state;
  }
};
