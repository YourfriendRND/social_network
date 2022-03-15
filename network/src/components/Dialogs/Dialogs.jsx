import React from 'react';
import { dialogs, headline,  } from './Dialogs.module.css';
import DialogsBlock from './DialogsBlock/DialogsBlock';
import MessagesBlock from './MessagesBlock/MessagesBlock';
import Message from './MessagesBlock/Message/Message';
import myAva from './../../images/profile_pic/default_profile_img.jpg';
import avatarka from './../../images/avatarka.jpg';
import DialogItem from './DialogsBlock/DialogItem/DialogItem';


class Dialogs extends React.Component {
    render () {
        return (
            <section className={dialogs}>
                <div className={headline}><h2>Сообщения</h2></div>
                <DialogsBlock chats={this.props.dialogsPage.dialogData.map(element => {
                    return <DialogItem id={element.id} userName={element.firstName}></DialogItem>
                })} />
                <MessagesBlock sentMessages={this.props.dialogsPage.messagesDataSent.map(message => {
                    return <Message userAvatar={myAva} text={message.content}></Message>
                })} 
                receivedMessages={this.props.dialogsPage.messagesDataReply.map(message => {
                    return <Message userAvatar={avatarka} text={message.content}></Message>
                })}
                addMessage={this.props.addMessage}
                updateNewMessage={this.props.updateNewMessage} newMessageText={this.props.dialogsPage.newMessageText}/>
            </section>
        )
    }
}

export default Dialogs;