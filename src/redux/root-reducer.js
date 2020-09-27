import {combineReducers} from "redux";

//Import reducers
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export const rootReducer = combineReducers(
    {
        user:userReducer,
        cart:cartReducer
    }
);