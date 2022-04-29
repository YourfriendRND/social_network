import React from "react";
import {
    authMain,
    welcomePage,
    forms,
    authForm__btn_registration,
    authForm__btnIcon,
    authForm__btnPath,
    userInformation,
    userInformation__headline,
    forms__headline,
} from "./AuthPage.module.css"; 

import RegistrationForm from "./RegistrationForm/RegistrationForm";
import AuthForm from "./AuthForm/AuthForm";

const AuthPage = () => {
    return <section className={welcomePage}>
        <div className={authMain}>
            <div className={forms}>
                <div className={authForm__btn_registration}>
                    <svg className={authForm__btnIcon} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 15 15" space="preserve" onClick={() => console.log("Icon click")}>
                        <g>
                            <path className={authForm__btnPath} d="M10.5,1.674V4c1.215,0.912,2,2.364,2,4c0,2.762-2.238,5-5,5s-5-2.238-5-5c0-1.636,0.785-3.088,2-4
                                V1.674C2.135,2.797,0.5,5.208,0.5,8c0,3.866,3.134,7,7,7s7-3.134,7-7C14.5,5.208,12.865,2.797,10.5,1.674z"/>
                            <path className={authForm__btnPath} d="M8.5,7.003V0.997C8.5,0.446,8.056,0,7.5,0c-0.553,0-1,0.453-1,0.997v6.006C6.5,7.554,6.944,8,7.5,8
                                C8.053,8,8.5,7.547,8.5,7.003z"/>
                        </g>
                    </svg>
                    
                </div>
                <div className={authForm__btn_registration}>
                  
                </div>
            </div>
            <div className={userInformation}>
                <div className={userInformation__headline}>
                    {/* <span className={forms__headline}>Форма регистрации</span> */}
                    <span className={forms__headline}>Форма входа</span>
                </div>
                <AuthForm />
                {/* <RegistrationForm /> */}
            </div>
        </div>
    </section>
}

export default AuthPage; 