import React from 'react';
import { post, avatar_pic, likesCounter } from './Post.module.css';
import avatar from '../../../../images/profile_pic/default_profile_img.jpg';

class Post extends React.Component {
    render() {
        return <div className={post}>
            <img className={avatar_pic} src={avatar} alt="Аватар пользователя" />
            <span className="message">{this.props.message}</span>
            <div className="control">
                <button className="likeButton">Мне нравится</button><span className={likesCounter}>{this.props.likesCount}</span>
            </div>
        </div>
    }
}

export default Post;