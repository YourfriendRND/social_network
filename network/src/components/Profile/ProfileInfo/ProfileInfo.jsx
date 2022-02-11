import React from "react";
import wallscreenImage from "../../../images/screen_wall.jpg";
import style from "./ProfileInfo.module.css";

const {wallpaper, wallpaper__image, descriptionBlock} = style; 

class ProfileInfo extends React.Component {
    render () {
        return (
            <section>
                <div className={wallpaper}>
                    <img className={wallpaper__image} src={wallscreenImage} alt="Заглушка" />
                </div>
                <div className={descriptionBlock}>
                    Аватар + описание
                </div>
            </section>
        )    
    }
}

// const ProfileInfo = () => {
//     return (
//         <section>
//             <div className={wallpaper}>
//                 <img className={wallpaper__image} src={wallscreenImage} alt="Заглушка" />
//             </div>
//             <div className={descriptionBlock}>
//                 Аватар + описание
//             </div>
//         </section>
//     )
// }

export default ProfileInfo; 