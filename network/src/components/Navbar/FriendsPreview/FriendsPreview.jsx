import React from 'react';
import style from "./FriendsPreview.module.css";
import { NavLink } from 'react-router-dom';
import RandomFriend from './RandomFriend/RandomFriend';
import { getRandomArray } from '../../../util';

class FriendsPreview extends React.Component {
    render() {
        const randomFriends = getRandomArray(this.props.sideBar.friendsData).slice(0, 3).map(friend => {
            return <RandomFriend path={friend.avatarUrl} personName={`${friend.firstName} ${friend.lastName}`}></RandomFriend>
        })
        return <div className={style.friendsWrapper}>
            <div className={style.myFriends}>
                <span className={style.myFriendsTitle}>Мои друзья</span>
                <span><NavLink className={style.allFriendsBtn} to="/friends">Все</NavLink></span>
            </div>
            <div className={style.randomFriendsBlock}>
                {randomFriends}
            </div>
        </div>
    }
}

// const FriendsPreview = (props) => {
//     const { sideBar } = props;
//     const randomFriends = getRandomArray(sideBar.friendsData).slice(0, 3).map(friend => <RandomFriend path={friend.avatarUrl} personName={`${friend.firstName} ${friend.lastName}`}></RandomFriend>)
//     const { myFriendsTitle, friendsWrapper, myFriends, allFriendsBtn, randomFriendsBlock } = style;
//     return <div className={friendsWrapper}>
//         <div className={myFriends}>
//             <span className={myFriendsTitle}>Мои друзья</span>
//             <span><NavLink className={allFriendsBtn} to="/friends">Все</NavLink></span>
//         </div>
//         <div className={randomFriendsBlock}>
//             {randomFriends}
//         </div>
//     </div>
// }

export default FriendsPreview; 