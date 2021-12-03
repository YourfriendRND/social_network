import React from 'react';
import style from './Message.module.css'

const Message = (props) => {
    const { text, userAvatar } = props;
    const { messageItemWrapper, messageItem, userAvatarImg } = style;
    return <div className={messageItemWrapper}>
        <img className={userAvatarImg} src={userAvatar} alt="аватарка пользователя" />
        <li className={messageItem}>{text}</li>
    </div>
}

export default Message; 
