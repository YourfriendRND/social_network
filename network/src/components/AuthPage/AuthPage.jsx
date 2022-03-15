import React from "react";
import {
    authMain,
    welcomePage,
    forms,
    authForm__btn, 
    registrationForm__btn,
    userInformation,
    userInformation__headline,
    forms__headline,
    authForm,
    authForm__email
} from "./AuthPage.module.css"; 

const AuthPage = () => {
    return <section className={welcomePage}>
        <div className={authMain}>
            <div className={forms}>
                <div className={authForm__btn}>

                </div>
                <div className={registrationForm__btn}>

                </div>
            </div>
            <div className={userInformation}>
                <div className={userInformation__headline}>
                    <span className={forms__headline}>Форма регистрации</span>
                </div>
                <div className={authForm}>
                    <div className={authForm__email}>
                        <label htmlFor="">
                            <input type="text" />    
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default AuthPage; 