import React from 'react';
import style from './Message.module.css'

class Message extends React.Component {
    render() {
        return <div className={style.messageItemWrapper}>
            <img className={style.userAvatarImg} src={this.props.userAvatar} alt="аватарка пользователя" />
            <li className={style.messageItem}>{this.props.text}</li>
        </div>
    }
}

// const Message = (props) => {
//     const { text, userAvatar } = props;
//     const { messageItemWrapper, messageItem, userAvatarImg } = style;
//     return <div className={messageItemWrapper}>
//         <img className={userAvatarImg} src={userAvatar} alt="аватарка пользователя" />
//         <li className={messageItem}>{text}</li>
//     </div>
// }

export default Message; 
