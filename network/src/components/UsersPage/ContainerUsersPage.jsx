import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../redux/usersReducer";
import UsersPage from "./UsersPage";

const mapStateToProps = (state) => {
    return {
       usersPage: state.usersPage,
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => (dispatch(setUsersAC(users))),
        follow: (userId) => (dispatch(followAC(userId))),
        unfollow: (userId) => (dispatch(unFollowAC(userId)))
    }
}; 

const ContainerUsersPage = connect(mapStateToProps, mapDispatchToProps)(UsersPage)

export default ContainerUsersPage; 