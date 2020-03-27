import { Action as ReduxAction } from "redux";
import { IUser } from "@interfaces";

// #endregion Global Imports

export interface IAction<T> extends ReduxAction {
    payload?: T;
}

export interface IStore {
    user: IUser.INITIAL_STATE;
}
