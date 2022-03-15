import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ContainerMyPost from "./MyPosts/ContainerMyPosts"
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {
    return (
        !props.userProfile
        ? <section className="Profile">
            <Preloader />
        </section> 
        : <section className="Profile">
            <ProfileInfo userProfile={props.userProfile}/>
            <ContainerMyPost />
        </section>
    ) 
}

export default Profile;