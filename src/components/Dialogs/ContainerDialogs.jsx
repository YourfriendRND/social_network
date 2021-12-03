import React from 'react';
import Dialogs from './Dialogs';
import Message from './MessagesBlock/Message/Message';
import DialogItem from './DialogsBlock/DialogItem/DialogItem';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from './../../redux/dialogsReducer'; 
import myAva from './../../images/profile_pic/default_profile_img.jpg';
import avatarka from './../../images/avatarka.jpg';
import StoreContext from '../../StoreContext';

const ContainerDialogs = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                const dispatch = store.dispatch;
                const dialogsPage = store.getState().dialogsPage;
                const { messagesDataSent, messagesDataReply, newMessageText, dialogData} = dialogsPage;
                const sentMessages = messagesDataSent.map(message => <Message userAvatar={myAva} text={message.content}></Message>);
                const receivedMessages = messagesDataReply.map(message => <Message userAvatar={avatarka} text={message.content}></Message>);
                const chats = dialogData.map(element => <DialogItem id={element.id} userName={element.firstName}></DialogItem>);
                const updateNewMessage = (body) => {
                    dispatch(updateNewMessageTextActionCreator(body))
                }
                const addMessage = () => {
                    dispatch(addMessageActionCreator())
                }
                return <Dialogs sentMessages={sentMessages} receivedMessages={receivedMessages} chats={chats} addMessage={addMessage}
                updateNewMessage={updateNewMessage} newMessageText={newMessageText}/>
            }
        }
    </StoreContext.Consumer>
}

export default ContainerDialogs;