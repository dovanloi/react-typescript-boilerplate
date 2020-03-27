// #region Global Imports
// import { Dispatch } from "redux"; 
// #endregion Global Imports

// #region Local Imports
import { ActionConsts } from "@definitions";
// #endregion Local Imports

export const PostActions = {
    Map: (payload: {}) => ({
        payload,
        type: ActionConsts.User.SetReducer,
    }),

    Reset: () => ({
        type: ActionConsts.User.ResetReducer,
    }),

    AddCount: () => ({
        type: ActionConsts.User.AddCount
    }),
};
