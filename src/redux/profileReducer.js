const initialState = {
    postsData: [
      { id: 3, content: "I'm still developing this social network, and i hope to finish soon", likesCount: 25 },
      { id: 2, content: "This is my first post in that perfect social network", likesCount: 10 },
      { id: 1, content: "Hi, how are you?", likesCount: 30 }
    ],
    newPostText: "Go...",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addPost": {
            const newPostData = {
                id: state.postsData.length + 1,
                content: state.newPostText,
                likesCount: 0,
            }
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData]; 
            stateCopy.postsData.unshift(newPostData);
            stateCopy.newPostText = "";
            return stateCopy; 
        }
        case "updatePostText": {
            let stateCopy = {...state}; 
            stateCopy.newPostText = action.postText;  
            return stateCopy; 
        }
        default: console.log("unexpected action"); 
    }
    return state;
}

const addPostActionCreator = () => {
    return {
        type: "addPost",
    }
};

const updatePostTextActionCreator = (text) => {
    return {
      type: "updatePostText",
      postText: text, 
    }
};

export {
    profileReducer, 
    addPostActionCreator,
    updatePostTextActionCreator
}