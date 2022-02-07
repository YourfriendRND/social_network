import React from "react";
import style from "./Friend.module.css"


const Friends = (props) => {
    return <div className={style.friendsItem}>
            <div className={style.friendHeaderThumb}>
                <img loading="lazy" src="https://html.crumina.net/html-olympus/img/friend1.webp" alt="friend" />
            </div>
            <div className={style.friendItemContent}>
                <div className={style.friendAvatar}>
                    <div className={style.authorThumb}>
                        <img loading="lazy" src="https://скачать-другвокруг.рф/wp-content/uploads/2018/11/avatarka-7.jpg" alt="author" width="92" height="92" />
                    </div>
                    <div className={style.authorContent}>
                        <a href="#" className={style.authorName}>Nicholas Grissom</a>
                        <div className={style.location}>San Francisco, CA</div>
                    </div>
                </div>
                <button className={style.more}>
                <div className={style.pointsAsButton}></div>
                </button>
            </div>
            <div className={style.userStatusWrapper}>
                <p className={style.userStatus}>
                    Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                </p>
            </div>
            <div className={style.slider}>
                <div className={style.sliderButtons}>
                    <button className={style.fullowUnfollowBtn}>
                        <img src="https://img.icons8.com/ios/50/000000/sad.png" width="25" height="25"/>
                    </button>
                    <button className={style.writeMessageBtn}>
                        <img src="https://img.icons8.com/ios/50/000000/open-envelope.png"  width="25" height="25"/>
                    </button>
                </div>
                <div className={style.sliderController}>
                    <button className={style.controllBtn}></button>
                    <button className={style.controllBtn} className={style.activeControllBtn}></button>
                </div>
            </div>
    </div>
}

export default Friends; 