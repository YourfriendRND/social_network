import { profileReducer } from "./profileReducer";
import { dialogReducer } from "./dialogsReducer";

const store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 3, content: "I'm still developing this social network, and i hope to finish soon", likesCount: 25 },
        { id: 2, content: "This is my first post in that perfect social network", likesCount: 10 },
        { id: 1, content: "Hi, how are you?", likesCount: 30 }
      ],
      newPostText: "Go...",
    },
    dialogsPage: {
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
    },
    sideBar: {
      friendsData: [
        {id: 1, firstName: "Евгений", lastName: "Петров", avatarUrl: "https://скачать-другвокруг.рф/wp-content/uploads/2018/11/avatarka-7.jpg"},
        {id: 2, firstName: "Никита", lastName: "Васильков", avatarUrl: "https://i.pinimg.com/236x/d5/2c/bd/d52cbdbba8c008534b0455363050aaf8.jpg"},
        {id: 3, firstName: "Света", lastName: "Варфоломеева", avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSlM_szRqtHV2qjh-Uq0DXmdV-m0XYC0B8pA&usqp=CAU"},
        {id: 4, firstName: "Саня", lastName: "Долгополов", avatarUrl: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png"}, 
        {id: 5, firstName: "Дмитрий", lastName: "Бродягин", avatarUrl: "https://static10.tgstat.ru/channels/_0/de/deeb9f0e7b43dc6d67f4628356c274d7.jpg"},
        {id: 6, firstName: "Юлия", lastName: "Никитина", avatarUrl: "http://sun9-17.userapi.com/impg/rrEXhuJKKJNUz738_jeY0w6iJHPUrUZiv-OiJw/2qoHnCsxJz4.jpg?size=483x604&quality=96&sign=c3da779fb28b22f1d4ce5c744416539a&type=album"}
      ]
    },
  },

  _getNewPostData () {
    return {
      id: this._state.profilePage.postsData.length + 1,
      content: this._state.profilePage.newPostText,
      likesCount: 0,
    }
  },

  _getNewMessage () {
    return {
      id: this._state.dialogsPage.messagesDataSent.length - 1,
      content: this._state.dialogsPage.newMessageText,
    }
  },
  
  getState() {
    return this._state;
  },
  
  subscribe (observer) {
    this._renderEntireTree = observer;
  },

  _renderEntireTree () {
    console.log("State was changed...");
  },

  dispatch (action) {
    // action is Object which describe what is action you need to do, has property type: 'DO SOMETHING'
    this._state.profilePage = profileReducer(this._state.profilePage, action); 
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._renderEntireTree(this._state);
  },
}

export {store}; 