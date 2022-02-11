import React from "react";
import * as axios from "axios"; 
import User from "./User";
import styles from "./UsersPage.module.css"; 

class UsersPage extends React.Component {
    
    componentDidMount () {
        axios.get("http://localhost:2000/users").then(res => this.props.setUsers(res.data))
    }

    render() {
        return <section className={styles.users}>
            {this.props.usersPage.users.map(user => {
                return <User key={user.id} user={user} follow={this.props.follow} unfollow={this.props.unfollow} />
            })}
        </section>
    }
}

// const UsersPage = (props) => {
//     console.log(props)
//     return (
//         <section className={styles.users}>
//             {props.usersPage.users.map(user => {
//                 return <User key={user.id} user={user} follow={props.follow} unfollow={props.unfollow} />
//             })}
//         </section>
//     )
// }

export default UsersPage; 
