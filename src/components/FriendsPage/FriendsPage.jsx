import React from "react";
import ContainerFriend from "./Friends/ContainerFriend";
import styles from "./FriendsPage.module.css";

const FriendsPage = () => {
    return (
    <section className={styles.friendsPage}>
        <ContainerFriend></ContainerFriend>
        <ContainerFriend></ContainerFriend>
        <ContainerFriend></ContainerFriend>
        <ContainerFriend></ContainerFriend>
        <ContainerFriend></ContainerFriend>
        <ContainerFriend></ContainerFriend>
    </section>
    )
}

export default FriendsPage