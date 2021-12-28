import React from 'react';
import style from "./Friends.module.css"; 
import { NavLink } from 'react-router-dom';
import RandomFriend from './RandomFriend/RandomFriend';

const Friends = (props) => {
    const { sideBar } = props;
    const getRandomArray = function (array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let tempValue = array[j];
          array[j] = array[i];
          array[i] = tempValue;
        }
        return array;
      }
      
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

export default Friends; 