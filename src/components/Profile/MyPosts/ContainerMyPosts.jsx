import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator } from '../../../redux/profileReducer';
import { updatePostTextActionCreator } from '../../../redux/profileReducer';
import MyPost from './MyPosts';
import StoreContext from '../../../StoreContext';

const ContainerMyPosts = () => {
    return (
        <StoreContext.Consumer> 
            {
                (store) => {
                    const state = store.getState();
                    const dispatch = store.dispatch;
                    const posts = state.profilePage.postsData.map(post => <Post message={post.content} likesCount={post.likesCount} />);
                    const defaultPostValue = state.profilePage.newPostText;
                    const addPost = () =>  {
                        dispatch(addPostActionCreator())
                    }
                
                    const updatePostText = (text) =>  {
                        dispatch(updatePostTextActionCreator(text));
                    }
                    return <MyPost postContent={posts} addPost={addPost} updatePostText={updatePostText} defaultPostValue={defaultPostValue} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default ContainerMyPosts; 