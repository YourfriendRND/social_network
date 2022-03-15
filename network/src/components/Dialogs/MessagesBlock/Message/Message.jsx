import React from 'react';
import { messageItemWrapper, userAvatarImg, messageItem } from './Message.module.css'

class Message extends React.Component {
    render() {
        return <div className={messageItemWrapper}>
            <img className={userAvatarImg} src={this.props.userAvatar} alt="аватарка пользователя" />
            <li className={messageItem}>{this.props.text}</li>
        </div>
    }
}

export default Message; 
