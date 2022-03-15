import React from "react";
import wallscreenImage from "../../../images/screen_wall.jpg";
import avatar from '../../../images/profile_pic/default_profile_img.jpg';
import requestFriendIcon from "../../../images/joke.png"
import dialogsIcon from "../../../images/email.png"
import settingsIcon from "../../../images/settings.png"
import {
    profileInfo, 
    wallpaper,
    wallpaper__image,
    profile__menu,
    profile__menuList,
    profile__user,
    profile__userPhotoWrapper,
    profile__userPhoto,
    profile__userContent,
    profile__controlPanel,
    profile__menuItemActive,
    profile__menuItem,
    profile__userName,
    profile__userLocation,
    profile__userContentWrapper,
    profile__friendRequests,
    profile__dialogs,
    profile__settings
} from "./ProfileInfo.module.css";
import { NavLink } from 'react-router-dom';

const ProfileInfo = (props) => {
    console.log("profileInfoProps", props) 
    return (
        <section className={profileInfo}>
            <div className={wallpaper}>
                <img className={wallpaper__image} src={props.userProfile.wallpaper ? props.userProfile.wallpaper : wallscreenImage} alt="Заглушка" />
            </div>
            <div className={profile__menu}>
                <ul className={profile__menuList}>
                    <li><NavLink to="/profile" className={profile__menuItem} activeClassName={profile__menuItemActive}>Лента</NavLink></li>
                    <li><NavLink to="/profile/about" className={profile__menuItem} activeClassName={profile__menuItemActive}>О себе</NavLink></li>
                    <li><NavLink to="/profile/friends" className={profile__menuItem} activeClassName={profile__menuItemActive}>Друзья</NavLink></li>
                    <li><NavLink to="/profile/photos" className={profile__menuItem} activeClassName={profile__menuItemActive}>Фотографии</NavLink></li>
                    <li><NavLink to="/profile/videos" className={profile__menuItem} activeClassName={profile__menuItemActive}>Видео</NavLink></li>
                </ul>
            </div>
            <div className={profile__controlPanel}>
                <img className={profile__friendRequests} src={requestFriendIcon} alt="Запросы в друзья" />
                <img className={profile__dialogs} src={dialogsIcon} alt="Диалоги" />
                <img className={profile__settings} src={settingsIcon} alt="Диалоги" />
            </div>
            <div className={profile__user}>
                <div className={profile__userPhotoWrapper}>
                    <img className={profile__userPhoto} src={props.userProfile.avatarUrl} alt="Фотография пользователя" />
                </div>
                <div className={profile__userContentWrapper}>
                    <div className={profile__userContent}>
                        <span className={profile__userName}>{props.userProfile.firstName} {props.userProfile.lastName}</span>
                        <span className={profile__userLocation}>{`${props.userProfile.country}, ${props.userProfile.city}`}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileInfo; 