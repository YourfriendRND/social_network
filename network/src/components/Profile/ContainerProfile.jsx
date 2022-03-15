import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/profileReducer"; 
import {withRouter} from "react-router-dom"; 

class ContainerProfileWrapper extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 1000;
        axios.get(`http://localhost:2000/profile/${userId}`).then((response) => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props} /> 
    }
};

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

const WithRouterProfileComponent = withRouter(ContainerProfileWrapper)

const ContainerProfile = connect(mapStateToProps, {
    setUserProfile
})(WithRouterProfileComponent); 

export default ContainerProfile; 