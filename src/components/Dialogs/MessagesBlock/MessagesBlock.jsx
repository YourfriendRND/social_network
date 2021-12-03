import React from 'react';
import style from './MessagesBlock.module.css';

const MessagesBlock = (props) => {
    const { sentMessages, receivedMessages, addMessage, updateNewMessage, newMessageText } = props; 
    const { messagesBlock, messagesList, sent, reply, userTextInputArea, textInput, submit } = style;
    const newMessageElement = React.createRef()
 
    return (
        <div className={messagesBlock}>
            Сообщения
            <ul className={messagesList}>
                <div className={sent}>
                    {sentMessages}
                </div>
                <div className={reply}>
                    {receivedMessages}
                </div>
            </ul>
            <div className={userTextInputArea}>
                <textarea className={textInput} ref={newMessageElement} value={newMessageText} onChange={() => updateNewMessage(newMessageElement.current.value)} ></textarea>
                <button className={submit} onClick={() => {
                    addMessage()
                }}>Отправить</button>
            </div>
        </div>
    )
}

export default MessagesBlock;