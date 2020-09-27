import {combineReducers} from "redux";

//Import reducers
import userReducer from "./user/user.reducer";

export const rootReducer = combineReducers(
    {
        user:userReducer
    }
);