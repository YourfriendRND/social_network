import React from 'react';
import style from "./FriendsPreview.module.css"; 
import { NavLink } from 'react-router-dom';
import RandomFriend from './RandomFriend/RandomFriend';
import { getRandomArray } from '../../../util';

const FriendsPreview = (props) => {
    const { sideBar } = props;  
    const randomFriends = getRandomArray(sideBar.friendsData).slice(0, 3).map(friend => <RandomFriend path={friend.avatarUrl} personName={`${friend.firstName} ${friend.lastName}`}></RandomFriend>)
    const { myFriendsTitle, friendsWrapper, myFriends, allFriendsBtn, randomFriendsBlock } = style; 
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

export default FriendsPreview; 