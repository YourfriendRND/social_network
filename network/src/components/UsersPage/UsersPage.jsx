import React from "react";
import { users, pagination } from "./UsersPage.module.css";
import User from "./User"; 
import Preloader from "../Preloader/Preloader";

const UsersPage = (props) => {
    return props.fetching 
    ? <section>
        <Preloader />
        <div className={pagination}>
            {props.paginationButtons}
        </div>
    </section>
    : <section>
        <div className={users}>
            {props.users.map(user => {
                return <User key={user.id} user={user} follow={props.follow} unfollow={props.unfollow} />
            })}
        </div>
        <div className={pagination}>
            {props.paginationButtons}
        </div>
    </section>
}

export default UsersPage; 
