const initialState = {
    newMessageText: "",
    messagesDataSent: [
        { id: 1, content: "Привет!" },
        { id: 2, content: "Как дела?" },
        { id: 3, content: "Сегодня классная погода, не хочешь прогуляться?" }
    ],
    messagesDataReply: [
        { id: 1, content: "Здарова!" },
        { id: 2, content: "У меня всё прекрасно)) Как ты поживаешь?" },
        { id: 3, content: "Да, отличная идея, предлагаю встретиться в 2 на нашем месте, что скажешь?" }
    ],
    dialogData: [
        { id: 1, firstName: "Евгений" },
        { id: 2, firstName: "Никита" },
        { id: 3, firstName: "Света" },
        { id: 4, firstName: "Саня" },
        { id: 5, firstName: "Дмитрий" }
    ],
}

const dialogReducer = (state = initialState, action) => {
    
    const stateCopy = {
        ...state,
        messagesDataSent: [...state.messagesDataSent]
    }
    
    switch (action.type) {
        case "addMessage": {
            const newMessage = {
                id: state.messagesDataSent.length - 1,
                content: state.newMessageText,
            }
            stateCopy.messagesDataSent.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy; 
        }
        case "updateNewMessageText": {
            stateCopy.newMessageText = action.messageText;
            return stateCopy; 
        }
        default: console.log("unexpected action"); 
    }
    return state;
}

const addMessageActionCreator = () => {
    return {
        type: "addMessage",
    }
};

const updateNewMessageTextActionCreator = (text) => {
    return {
        type: "updateNewMessageText",
        messageText: text,
    }
};

export {
    dialogReducer,
    addMessageActionCreator,
    updateNewMessageTextActionCreator
}