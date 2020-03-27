// #region Local Imports
import { ActionConsts } from "@definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IUser } from "@interfaces";
// #endregion Interface Imports


const INITIAL_STATE: IUser.INITIAL_STATE = {
    count: 1
};

type IMapPayload = IUser.Actions.IMapPayload;

export const userReducer = (
    state = INITIAL_STATE,
    action: IAction<IMapPayload>
) => {
    switch (action.type) {
        case ActionConsts.User.SetReducer:
            return {
                ...state,
                ...action.payload,
            };

        case ActionConsts.User.ResetReducer:
            return INITIAL_STATE;
        case ActionConsts.User.AddCount:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state;
    }
};
