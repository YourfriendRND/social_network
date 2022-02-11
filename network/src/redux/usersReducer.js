const initialState = {
    users: [],
}

const followAC = (userId) => ({ type: "FOLLOW", id: userId }); 
const unFollowAC = (userId) => ({ type: "UNFOLLOW", id: userId }); 
const setUsersAC = (users) => ({type: "SET_USERS", users: users});

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user; 
                })
            }; 
        }
        case "SET_USERS": {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default: return state; 
    }
}

export {
    usersReducer,
    followAC,
    unFollowAC,
    setUsersAC
}
