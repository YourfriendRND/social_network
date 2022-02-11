import React from 'react';
import style from './MessagesBlock.module.css';

class MessagesBlock extends React.Component {
    constructor () {
        super()
        this.newMessageElement = React.createRef()
    }
    render() {
        return (
            <div className={style.messagesBlock}>
                Сообщения
                <ul className={style.messagesList}>
                    <div className={style.sent}>
                        {this.props.sentMessages}
                    </div>
                    <div className={style.reply}>
                        {this.props.receivedMessages}
                    </div>
                </ul>
                <div className={style.userTextInputArea}>
                    <textarea className={style.textInput} ref={this.newMessageElement} value={this.props.newMessageText} onChange={() => this.props.updateNewMessage(this.newMessageElement.current.value)} ></textarea>
                    <button className={style.submit} onClick={() => {
                        this.props.addMessage()
                    }}>Отправить</button>
                </div>
            </div>
        )
    }
}

// const MessagesBlock = (props) => {
//     const { sentMessages, receivedMessages, addMessage, updateNewMessage, newMessageText } = props;
//     const { messagesBlock, messagesList, sent, reply, userTextInputArea, textInput, submit } = style;
//     const newMessageElement = React.createRef()

//     return (
//         <div className={messagesBlock}>
//             Сообщения
//             <ul className={messagesList}>
//                 <div className={sent}>
//                     {sentMessages}
//                 </div>
//                 <div className={reply}>
//                     {receivedMessages}
//                 </div>
//             </ul>
//             <div className={userTextInputArea}>
//                 <textarea className={textInput} ref={newMessageElement} value={newMessageText} onChange={() => updateNewMessage(newMessageElement.current.value)} ></textarea>
//                 <button className={submit} onClick={() => {
//                     addMessage()
//                 }}>Отправить</button>
//             </div>
//         </div>
//     )
// }

export default MessagesBlock;