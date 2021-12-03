import React from 'react';
import style from "./RandomFriend.module.css";


const RandomFriend = (props) => {
    const { path, personName } = props;
    const { randomFriend, friendAvaWrapper, friendAva, friendName } = style;
    return <div className={randomFriend}>
        <div className={friendAvaWrapper}>
            <img className={friendAva} src={path} alt="Аватар пользователя" />
        </div>
        <span className={friendName}>{personName}</span>
    </div>
}

export default RandomFriend;