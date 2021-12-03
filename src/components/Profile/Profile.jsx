import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ContainerMyPost from "./MyPosts/ContainerMyPosts"

const Profile = (props) => {
    return (
        <section className="Profile">
            <ProfileInfo />
            <ContainerMyPost />
        </section>
    )
}

export default Profile;