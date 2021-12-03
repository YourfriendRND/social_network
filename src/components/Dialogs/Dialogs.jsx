import React from 'react';
import style from './Dialogs.module.css';
import DialogsBlock from './DialogsBlock/DialogsBlock';
import MessagesBlock from './MessagesBlock/MessagesBlock';

const Dialogs = (props) => {
    const { sentMessages, receivedMessages, chats, addMessage, updateNewMessage, newMessageText } = props; 
    const { dialogs, headline } = style;
    return (
        <section className={dialogs}>
            <div className={headline}><h2>Сообщения</h2></div>
            <DialogsBlock chats={chats} />
            <MessagesBlock sentMessages={sentMessages} receivedMessages={receivedMessages} addMessage={addMessage}
            updateNewMessage={updateNewMessage} newMessageText={newMessageText}/>
        </section>
    )
}

export default Dialogs;