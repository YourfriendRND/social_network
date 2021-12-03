import React from 'react';
import { NavLink } from 'react-router-dom';
import avatarka from "../../../../images/avatarka.jpg"
import style from "./DialogItem.module.css"; 

const DialogItem = (props) => {
    const {id, userName} = props;
    const {userWrapper, userItem, userAvatar } = style; 
    return <div className={userWrapper}>
        <img className={userAvatar} src={avatarka} alt="Аватар пользователя" />
        <li className={userItem}><NavLink to={`/dialogs/${id}`}>{userName}</NavLink></li>
    </div>
}

export default DialogItem;