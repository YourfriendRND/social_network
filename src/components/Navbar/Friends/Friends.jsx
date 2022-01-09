import React from "react";
import style from "./Friends.module.css"


const Friends = (props) => {
    return <div className={style.friendsItem}>
        <div className={style.friendHeaderThumb}>
            <img loading="lazy" src="https://html.crumina.net/html-olympus/img/friend1.webp" alt="friend" />
        </div>
        <div className={style.friendItemContent}>
            <button className={style.more}>
               <div className={style.pointsAsButton}></div>
            </button>
        </div>
        {/* <div class="friend-item-content">
            <div class="more">
                <svg class="olymp-three-dots-icon"><use xlink:href="#olymp-three-dots-icon"></use></svg>
                <ul class="more-dropdown">
                    <li>
                        <a href="#">Report Profile</a>
                    </li>
                    <li>
                        <a href="#">Block Profile</a>
                    </li>
                    <li>
                        <a href="#">Turn Off Notifications</a>
                    </li>
                </ul>
            </div>
            <div class="friend-avatar">
                <div class="author-thumb">
                    <img loading="lazy" src="img/avatar1.webp" alt="author" width="92" height="92">
                </div>
                <div class="author-content">
                    <a href="#" class="h5 author-name">Nicholas Grissom</a>
                    <div class="country">San Francisco, CA</div>
                </div>
            </div>

            <div class="swiper-container swiper-swiper-unique-id-0 initialized swiper-container-horizontal" data-slide="fade" id="swiper-unique-id-0">
                <div class="swiper-wrapper" style="width: 996px; transform: translate3d(-249px, 0px, 0px); transition-duration: 0ms;"><div class="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="1" style="width: 249px;">
                    <p class="friend-about" data-swiper-parallax="-500" style="transform: translate3d(-500px, 0px, 0px); transition-duration: 0ms;">
                        Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                    </p>

                    <div class="friend-since" data-swiper-parallax="-100" style="transform: translate3d(-100px, 0px, 0px); transition-duration: 0ms;">
                        <span>Friends Since:</span>
                        <div class="h6">December 2014</div>
                    </div>
                </div>
                    <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style="width: 249px;">
                        <div class="friend-count" data-swiper-parallax="-500" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                            <a href="#" class="friend-count-item">
                                <div class="h6">52</div>
                                <div class="title">Friends</div>
                            </a>
                            <a href="#" class="friend-count-item">
                                <div class="h6">240</div>
                                <div class="title">Photos</div>
                            </a>
                            <a href="#" class="friend-count-item">
                                <div class="h6">16</div>
                                <div class="title">Videos</div>
                            </a>
                        </div>
                        <div class="control-block-button" data-swiper-parallax="-100" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                            <a href="#" class="btn btn-control bg-blue">
                                <svg class="olymp-happy-face-icon"><use xlink:href="#olymp-happy-face-icon"></use></svg>
                            </a>

                            <a href="#" class="btn btn-control bg-purple">
                                <svg class="olymp-chat---messages-icon"><use xlink:href="#olymp-chat---messages-icon"></use></svg>
                            </a>

                        </div>
                    </div>

                    <div class="swiper-slide swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="1" style="width: 249px;">
                        <p class="friend-about" data-swiper-parallax="-500" style="transform: translate3d(500px, 0px, 0px); transition-duration: 0ms;">
                            Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                        </p>

                        <div class="friend-since" data-swiper-parallax="-100" style="transform: translate3d(100px, 0px, 0px); transition-duration: 0ms;">
                            <span>Friends Since:</span>
                            <div class="h6">December 2014</div>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 249px;">
                        <div class="friend-count" data-swiper-parallax="-500" style="transform: translate3d(500px, 0px, 0px); transition-duration: 0ms;">
                            <a href="#" class="friend-count-item">
                                <div class="h6">52</div>
                                <div class="title">Friends</div>
                            </a>
                            <a href="#" class="friend-count-item">
                                <div class="h6">240</div>
                                <div class="title">Photos</div>
                            </a>
                            <a href="#" class="friend-count-item">
                                <div class="h6">16</div>
                                <div class="title">Videos</div>
                            </a>
                        </div>
                        <div class="control-block-button" data-swiper-parallax="-100" style="transform: translate3d(100px, 0px, 0px); transition-duration: 0ms;">
                            <a href="#" class="btn btn-control bg-blue">
                                <svg class="olymp-happy-face-icon"><use xlink:href="#olymp-happy-face-icon"></use></svg>
                            </a>

                            <a href="#" class="btn btn-control bg-purple">
                                <svg class="olymp-chat---messages-icon"><use xlink:href="#olymp-chat---messages-icon"></use></svg>
                            </a>

                        </div>
                    </div></div>

                <!-- If we need pagination -->
                <div class="swiper-pagination pagination-swiper-unique-id-0 swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span></div>
            </div>
        </div> */}
    </div>
}

export default Friends; 