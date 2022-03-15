import React from 'react';
import {randomFriend, friendAvaWrapper, friendAva, friendName } from "./RandomFriend.module.css";

class RandomFriend extends React.Component {
    render() {
        return <div className={randomFriend}>
            <div className={friendAvaWrapper}>
                <img className={friendAva} src={this.props.path} alt="Аватар пользователя" />
            </div>
            <span className={friendName}>{this.props.personName}</span>
        </div>
    }
}

export default RandomFriend;