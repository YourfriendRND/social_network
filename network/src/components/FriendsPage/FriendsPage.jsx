import React from "react";
import ContainerFriend from "./Friends/ContainerFriend";
import style from "./FriendsPage.module.css";

class FriendsPage extends React.Component {
    render() {
        return (
            <section className={style.friendsPage}>
                <ContainerFriend></ContainerFriend>
                <ContainerFriend></ContainerFriend>
                <ContainerFriend></ContainerFriend>
                <ContainerFriend></ContainerFriend>
                <ContainerFriend></ContainerFriend>
                <ContainerFriend></ContainerFriend>
            </section>
        )
    }
}

// const FriendsPage = () => {
//     return (
//         <section className={styles.friendsPage}>
//             <ContainerFriend></ContainerFriend>
//             <ContainerFriend></ContainerFriend>
//             <ContainerFriend></ContainerFriend>
//             <ContainerFriend></ContainerFriend>
//             <ContainerFriend></ContainerFriend>
//             <ContainerFriend></ContainerFriend>
//         </section>
//     )
// }

export default FriendsPage