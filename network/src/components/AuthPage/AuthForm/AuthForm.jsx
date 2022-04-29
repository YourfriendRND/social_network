import React from "react";
import {
    authForm,
    authForm__email
} from "./AuthForm.module.css"

const AuthForm = () => {
    return <div className={authForm}>
        <div className={authForm__email}>
            <input type="text" placeholder="Ваш email" />
        </div> 
    </div>
}; 

export default AuthForm; 