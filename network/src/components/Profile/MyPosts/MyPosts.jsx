import React from 'react';
import { posts } from './MyPosts.module.css'; 
import Post from './Post/Post';


class MyPosts extends React.Component {
    render () {
        const newPostElement = React.createRef();
        return <section className={posts}>
        <h2 className="postBlockTitle">Мои посты</h2>
        <div className="newPostArea">
            <textarea className="newPostContent" ref={newPostElement} value={this.props.profilePage.newPostText} onChange={() => {
               this.props.updatePostText(newPostElement.current.value)
            }} cols="30" rows="10"></textarea>
            <button className="createPost" type="button" onClick={() => {
                this.props.addPost()
            }}>Добавить пост</button>
        </div>
        {this.props.profilePage.postsData.map(post => <Post message={post.content} likesCount={post.likesCount} />)}
    </section>    
    }
}

export default MyPosts; 