import React from 'react';
import { NavLink } from 'react-router-dom';
import avatarka from "../../../../images/avatarka.jpg"
import style from "./DialogItem.module.css";

class DialogItem extends React.Component {
    render() {
        return <div className={style.userWrapper}>
            <img className={style.userAvatar} src={avatarka} alt="Аватар пользователя" />
            <li className={style.userItem}><NavLink to={`/dialogs/${this.props.id}`}>{this.props.userName}</NavLink></li>
        </div>
    }
}

// const DialogItem = (props) => {
//     const { id, userName } = props;
//     const { userWrapper, userItem, userAvatar } = style;
//     return <div className={userWrapper}>
//         <img className={userAvatar} src={avatarka} alt="Аватар пользователя" />
//         <li className={userItem}><NavLink to={`/dialogs/${id}`}>{userName}</NavLink></li>
//     </div>
// }

export default DialogItem;