import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware, { ThunkMiddleware } from "redux-thunk";

import reducers, { AppState } from "./reducers";
import { AppActions } from "./actions/types";

export default createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunkMiddleware as ThunkMiddleware<AppState, AppActions>)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
