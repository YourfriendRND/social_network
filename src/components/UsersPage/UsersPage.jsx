import React from "react"; 
import User from "./User";
import styles from "./UsersPage.module.css"; 

const UsersPage = (props) => {
    return (
        <section className={styles.users}>
            {props.users.map(user => {
                return <User key={user.id} user={user} follow={props.follow} unfollow={props.unfollow} />
            })}
        </section>
    )
}

export default UsersPage; 
