import React from 'react';
import style from "./RandomFriend.module.css";

class RandomFriend extends React.Component {
    render() {
        return <div className={style.randomFriend}>
            <div className={style.friendAvaWrapper}>
                <img className={style.friendAva} src={this.props.path} alt="Аватар пользователя" />
            </div>
            <span className={style.friendName}>{this.props.personName}</span>
        </div>
    }
}

// const RandomFriend = (props) => {
//     const { path, personName } = props;
//     const { randomFriend, friendAvaWrapper, friendAva, friendName } = style;
//     return <div className={randomFriend}>
//         <div className={friendAvaWrapper}>
//             <img className={friendAva} src={path} alt="Аватар пользователя" />
//         </div>
//         <span className={friendName}>{personName}</span>
//     </div>
// }

export default RandomFriend;