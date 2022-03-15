const initialState = {
    postsData: [
      { id: 3, content: "I'm still developing this social network, and i hope to finish soon", likesCount: 25 },
      { id: 2, content: "This is my first post in that perfect social network", likesCount: 10 },
      { id: 1, content: "Hi, how are you?", likesCount: 30 }
    ],
    newPostText: "Go...",
    userProfile: null, 
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addPost": {
            return {
                ...state,
                postsData: [{
                    id: state.postsData.length + 1,
                    content: state.newPostText,
                    likesCount: 0,
                }, 
                ...state.postsData],
                newPostText: "",
            }; 
        }
        case "updatePostText": {
            return {
                ...state,
                newPostText: action.postText,  
            };  
        }
        case "SET_USER_PROFILE": {
            return {
                ...state, 
                userProfile: {
                    ...action.userProfile
                }
            }
        }
        default: return state; 
    }
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

const setUserProfile = (userProfile) => ({type: "SET_USER_PROFILE", userProfile: userProfile})


export {
    profileReducer, 
    addPostActionCreator,
    updatePostTextActionCreator,
    setUserProfile
}