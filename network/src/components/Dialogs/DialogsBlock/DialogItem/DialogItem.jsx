import React from 'react';
import { NavLink } from 'react-router-dom';
import avatarka from "../../../../images/avatarka.jpg"
import { userWrapper, userAvatar, userItem } from "./DialogItem.module.css";

class DialogItem extends React.Component {
    render() {
        return <div className={userWrapper}>
            <img className={userAvatar} src={avatarka} alt="Аватар пользователя" />
            <li className={userItem}><NavLink to={`/dialogs/${this.props.id}`}>{this.props.userName}</NavLink></li>
        </div>
    }
}

export default DialogItem;