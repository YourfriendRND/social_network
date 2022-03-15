import React from 'react';
import { messagesBlock, messagesList, sent, reply, userTextInputArea, textInput, submit } from './MessagesBlock.module.css';

class MessagesBlock extends React.Component {
    constructor () {
        super()
        this.newMessageElement = React.createRef()
    }
    render() {
        return (
            <div className={messagesBlock}>
                Сообщения
                <ul className={messagesList}>
                    <div className={sent}>
                        {this.props.sentMessages}
                    </div>
                    <div className={reply}>
                        {this.props.receivedMessages}
                    </div>
                </ul>
                <div className={userTextInputArea}>
                    <textarea className={textInput} ref={this.newMessageElement} value={this.props.newMessageText} onChange={() => this.props.updateNewMessage(this.newMessageElement.current.value)} ></textarea>
                    <button className={submit} onClick={() => {
                        this.props.addMessage()
                    }}>Отправить</button>
                </div>
            </div>
        )
    }
}

export default MessagesBlock;