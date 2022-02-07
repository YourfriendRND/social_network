import Friend from "./Friend"; 
import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../../redux/friendsReducer";

const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => (dispatch(followAC(userId))),
        unFollow: (userId) => (dispatch(unFollowAC(userId))),
        setUsers: (users) => (dispatch(setUsersAC(users))), 
    }
}

const ContainerFriends = connect(mapStateToProps, mapDispatchToProps)(Friend);

export default ContainerFriends