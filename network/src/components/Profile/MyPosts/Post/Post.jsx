import React from 'react';
import style from './Post.module.css';
import avatar from '../../../../images/profile_pic/default_profile_img.jpg';

class Post extends React.Component {
    render() {
        return <div className={style.post}>
            <img className={style.avatar_pic} src={avatar} alt="Аватар пользователя" />
            <span className="message">{this.props.message}</span>
            <div className="control">
                <button className="likeButton">Мне нравится</button><span className={style.likesCounter}>{this.props.likesCount}</span>
            </div>
        </div>
    }
}

// const Post = (props) => {
//     const {message, likesCount} = props;
//     const {avatar_pic, post, likesCounter} = style;  
//     return (
//         <div className={post}>
//             <img className={avatar_pic} src={avatar} alt="Аватар пользователя" />
//             <span className="message">{message}</span>
//             <div className="control">
//                 <button className="likeButton">Мне нравится</button><span className={likesCounter}>{likesCount}</span>
//             </div>
//         </div>
//     )
// }

export default Post;