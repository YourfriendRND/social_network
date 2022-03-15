import React from "react";
import { user, basicInfo, avatar, author, authorName, location, btnController, writeMessageBtn, status } from "./User.module.css";
import FollowBtn from "./FollowBtn";
import { NavLink } from "react-router-dom";

const User = (props) => {
    return <div className={user}>
        <div className={basicInfo}>
            <div className={avatar}>
                <img loading="lazy" src={props.user.avatarUrl} alt="author" width="42" height="42" />
            </div>
            <div className={author}>
                <div className={authorName}>
                    <NavLink to={`/profile/${props.user.id}`}>{`${props.user.lastName} ${props.user.firstName}`}</NavLink>
                </div>
                <div className={location}>
                    {props.user.city}, {props.user.country}
                </div>
            </div>
            <div className={btnController}>
                <FollowBtn followed={props.user.followed} follow={props.follow} unfollow={props.unfollow} userId={props.user.id} />
                <button className={writeMessageBtn}>
                    <img src="https://img.icons8.com/ios/50/000000/open-envelope.png" width="25" height="25" />
                </button>
            </div>
        </div>
        <div className={status}>
            Статус: {props.user.status}
        </div>
    </div>
}

export default User; 