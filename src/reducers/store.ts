// #region Global Imports
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./user";
// #endregion Local Imports

const Reducers = combineReducers({
    user: userReducer,
});

export const store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware())
);