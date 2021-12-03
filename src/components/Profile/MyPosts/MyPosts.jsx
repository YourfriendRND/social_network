import React from 'react';
import style from './MyPosts.module.css'; 

const myPosts = (props) => {
    const { postContent, addPost, updatePostText, defaultPostValue } = props; 
    const { posts } = style; 
    const newPostElement = React.createRef();

    return <section className={posts}>
        <h2 className="postBlockTitle">Мои посты</h2>
        <div className="newPostArea">
            <textarea className="newPostContent" ref={newPostElement} value={defaultPostValue} onChange={() => {
               updatePostText(newPostElement.current.value)
            }} cols="30" rows="10"></textarea>
            <button className="createPost" type="button" onClick={() => {
                addPost()
            }}>Добавить пост</button>
        </div>
        {postContent}
    </section>
}

export default myPosts; 