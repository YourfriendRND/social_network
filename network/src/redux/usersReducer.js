const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const follow = (userId) => ({ type: "FOLLOW", id: userId }); 
const unFollow = (userId) => ({ type: "UNFOLLOW", id: userId }); 
const setUsers = (users) => ({type: "SET_USERS", users: users});
const changeCurrentPage = (currentPage) => ({type: "CHANGE_USER_PAGE", currentPage: currentPage});
const setTotalUserCount = (totalCount) => ({type: "SET_TOTAL_USER_COUNT", totalCount: totalCount});
const setIsFetching = (fetching) => ({type: "TOGGLE_IS_FETCHING", isFetching: fetching})

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_IS_FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case "SET_TOTAL_USER_COUNT": {
            return {
                ...state, 
                totalUsersCount: action.totalCount
            }
        }
        case "CHANGE_USER_PAGE": {
            return {
                ...state, 
                currentPage: action.currentPage,
            }
        }
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
                users: [...action.users]
            }
        }
        default: return state; 
    }
}

export {
    usersReducer,
    follow,
    unFollow,
    setUsers, 
    changeCurrentPage,
    setTotalUserCount,
    setIsFetching
}
