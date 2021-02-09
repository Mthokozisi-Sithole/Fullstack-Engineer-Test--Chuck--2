import * as actions from "../actions/types";

export default (
  state: string = "animal",
  action: actions.ChangeCurrentCategoryAction
): string => {
  switch (action.type) {
    case actions.CHANGE_CURRENT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};
