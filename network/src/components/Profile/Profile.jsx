import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ContainerMyPost from "./MyPosts/ContainerMyPosts"

class Profile extends React.Component {
    render() {
        return (
            <section className="Profile">
                <ProfileInfo />
                <ContainerMyPost />
            </section>
        )
    }
}

// const Profile = () => {
//     return (
//         <section className="Profile">
//             <ProfileInfo />
//             <ContainerMyPost />
//         </section>
//     )
// }

export default Profile;