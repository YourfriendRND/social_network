import { combineReducers, createStore } from "redux"
import { profileReducer } from "./profileReducer";
import { dialogReducer } from "./dialogsReducer";
import { friendsReducer } from "./friendsReducer";
// import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    friendPage: friendsReducer,
})

const store = createStore(reducers); 

export default store; 