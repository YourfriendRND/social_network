import React from 'react';
import style from './Post.module.css';
import avatar from '../../../../images/profile_pic/default_profile_img.jpg';

const Post = (props) => {
    const {message, likesCount} = props;
    const {avatar_pic, post, likesCounter} = style;  
    return (
        <div className={post}>
            <img className={avatar_pic} src={avatar} alt="Аватар пользователя" />
            <span className="message">{message}</span>
            <div className="control">
                <button className="likeButton">Мне нравится</button><span className={likesCounter}>{likesCount}</span>
            </div>
        </div>
    )
}

export default Post;