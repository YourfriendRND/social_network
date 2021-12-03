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
    switch (action.type) {
        case "addMessage":
            const newMessage = {
                id: state.messagesDataSent.length - 1,
                content: state.newMessageText,
            }
            state.messagesDataSent.push(newMessage);
            state.newMessageText = "";
            break;
        case "updateNewMessageText":
            state.newMessageText = action.messageText;
            break;
        default: console.error("unexpected action");
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