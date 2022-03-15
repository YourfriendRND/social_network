import React from "react";
import { followBtn } from "./User.module.css"

const FollowBtn = (props) => {
    if (props.followed) {
        return <button className={followBtn} onClick={() => (props.unfollow(props.userId))}>
            <img src="https://img.icons8.com/ios/452/unfriend-male.png" alt="Удалить из друзей" width="25" height="25" />
        </button>
    } 
    return <button className={followBtn} onClick={() => (props.follow(props.userId))}>
        <img src="https://img.icons8.com/ios/344/add-user-group-man-man--v1.png" alt="Добавить в друзья" width="25" height="25" />
    </button>
}

export default FollowBtn