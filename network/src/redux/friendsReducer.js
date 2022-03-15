const initialState = {
    friendsData: [], 
};

const followAC = (userId) => ({ type: "FOLLOW", id: userId }); 
const unFollowAC = (userId) => ({ type: "UNFOLLOW", id: userId }); 
const setUsersAC = (users) => ({type: "SET_USERS", friendsData: users})

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case "FOLLOW": {
        //     return {
        //         ...state,
        //         friendsData: state.friendsData.map(user => {
        //             if (user.id === action.id) {
        //                 return {...user, followed: true}
        //             }
        //             return user;
        //         })
        //     }
        // }
        // case "UNFOLLOW": {
        //     return {
        //         ...state,
        //         friendsData: state.friendsData.map(user => {
        //             if (user.id === action.id) {
        //                 return {...user, followed: false}
        //             }
        //             return user; 
        //         })
        //     }; 
        // }
        // case "SET_USERS": {
        //     return {
        //         ...state,
        //         friendsData: [...state.friendsData, ...action.friendsData]
        //     }
        // }
        default: return state; 
    }
}

export {
    friendsReducer,
    followAC,
    unFollowAC,
    setUsersAC
}