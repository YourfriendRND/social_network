import React from 'react';
import {friendsWrapper, myFriends, myFriendsTitle, allFriendsBtn, randomFriendsBlock} from "./FriendsPreview.module.css";
import { NavLink } from 'react-router-dom';
import RandomFriend from './RandomFriend/RandomFriend';
import { getRandomArray } from '../../../util';

class FriendsPreview extends React.Component {
    render() {
        const randomFriends = getRandomArray(this.props.sideBar.friendsData).slice(0, 3).map(friend => {
            return <RandomFriend path={friend.avatarUrl} personName={`${friend.firstName} ${friend.lastName}`}></RandomFriend>
        })
        return <div className={friendsWrapper}>
            <div className={myFriends}>
                <span className={myFriendsTitle}>Мои друзья</span>
                <span><NavLink className={allFriendsBtn} to="/friends">Все</NavLink></span>
            </div>
            <div className={randomFriendsBlock}>
                {randomFriends}
            </div>
        </div>
    }
}

export default FriendsPreview; 