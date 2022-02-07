import React from "react";
import styles from "./User.module.css"

const User = (props) => {
    const {
        lastName,
        firstName,
        avatarUrl,
        country, 
        city,
        status,
        followed, 
        id,
    } = props.user
    const { follow, unfollow } = props; 
    return (
        <div className={styles.user}>
            <div className={styles.basicInfo}>
                <div className={styles.avatar}>
                    <img loading="lazy" src={avatarUrl} alt="author" width="42" height="42" />
                </div>
                <div className={styles.author}>
                    <div className={styles.authorName}>
                        <a href="#">{`${lastName} ${firstName}`}</a>
                    </div>
                    <div className={styles.location}>
                        {city}, {country}
                    </div>
                </div>
                <div className={styles.btnController}>
                    {followed 
                        ? (<button className={styles.followBtn} onClick={() => (unfollow(id))}>
                            <img src="https://img.icons8.com/ios/452/unfriend-male.png" alt="Удалить из друзей" width="25" height="25" />
                        </button>)
                        :   (<button className={styles.followBtn} onClick={() => (follow(id))}>
                                <img src="https://img.icons8.com/ios/344/add-user-group-man-man--v1.png" alt="Добавить в друзья" width="25" height="25" />
                            </button>)
                    }
                    <button className={styles.writeMessageBtn}>
                        <img src="https://img.icons8.com/ios/50/000000/open-envelope.png"  width="25" height="25"/>
                    </button>
                </div>
            </div>
            <div className={styles.status}>
                Статус: {status}
            </div>
        </div>
    )
}

export default User; 