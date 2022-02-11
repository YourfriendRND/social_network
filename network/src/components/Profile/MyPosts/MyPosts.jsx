import React from 'react';
import style from './MyPosts.module.css'; 
import Post from './Post/Post';


class MyPosts extends React.Component {
    render () {
        const newPostElement = React.createRef();
        return <section className={style.posts}>
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

// const myPosts = (props) => {
//     const { profilePage, updatePostText, addPost } = props; 
//     const { posts } = style; 
//     const newPostElement = React.createRef();

//     const postContent = profilePage.postsData.map(post => <Post message={post.content} likesCount={post.likesCount} />);
//     const defaultPostValue = profilePage.newPostText;


//     return <section className={posts}>
//         <h2 className="postBlockTitle">Мои посты</h2>
//         <div className="newPostArea">
//             <textarea className="newPostContent" ref={newPostElement} value={defaultPostValue} onChange={() => {
//                updatePostText(newPostElement.current.value)
//             }} cols="30" rows="10"></textarea>
//             <button className="createPost" type="button" onClick={() => {
//                 addPost()
//             }}>Добавить пост</button>
//         </div>
//         {postContent}
//     </section>
// }

export default MyPosts; 