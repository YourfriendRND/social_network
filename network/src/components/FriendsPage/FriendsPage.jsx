import React from "react";
import ContainerFriend from "./Friends/ContainerFriend";
import { friendsPage } from "./FriendsPage.module.css";

class FriendsPage extends React.Component {
    render() {
        return (
            <section className={friendsPage}>
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

export default FriendsPage