import { combineReducers } from "redux";
import loginUserReducer, { userState } from "./loginUserReducer";
import registerUserReducer, { registerUserState } from "./registerUserReducer";
//import getMessagesReducer, { messagesState } from "./getMessagesReducer";
import messageReducer, {messagesState} from "./messageReducer";

export const initialState = {  
    userState: userState,
    registerUserState:registerUserState,
    messagesState: messagesState
};
  
export default combineReducers( { 
    loginUserReducer,
    registerUserReducer,
    messageReducer
} );
  
