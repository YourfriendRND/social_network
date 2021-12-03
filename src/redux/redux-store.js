import { combineReducers, createStore } from "redux"
import { profileReducer } from "./profileReducer";
import { dialogReducer } from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sideBar: sidebarReducer, 
})

const store = createStore(reducers); 

export default store; 