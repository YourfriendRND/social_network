import { combineReducers, createStore } from "redux"
import { profileReducer } from "./profileReducer";
import { dialogReducer } from "./dialogsReducer";
import { friendsReducer } from "./friendsReducer";
import { usersReducer } from "./usersReducer";
// import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    friendPage: friendsReducer,
    usersPage: usersReducer, 
})

const store = createStore(reducers); 

export default store; 