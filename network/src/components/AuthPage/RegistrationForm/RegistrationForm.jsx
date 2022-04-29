import React from "react"
import {
    regForm,
    regForm__names, 
    regForm__firstName,
    regForm__lastName,
    regForm__personal, 
    regForm__email,
    regForm__password,
    regForm__birthday,
    regForm__gender,
    regForm__genderSelect,
    regForm__agreement,
    regForm__confirmation
} from "./RegistrationForm.module.css"; 

const RegistrationForm = () => {
    return <div className={regForm}>
        <div className={regForm__names}>
            <div className={regForm__firstName}>
                <input type="text" placeholder="Ваше имя" />
            </div>
            <div className={regForm__lastName}>
                <input type="text" placeholder="Ваша фамилия" />
            </div>
        </div>
        <div className={regForm__personal}>
            <div className={regForm__email}>
                <input type="text" placeholder="Ваш email" />
            </div>
            <div className={regForm__password}>
                <input type="password" placeholder="Ваш пароль" />
            </div>
            <div className={regForm__birthday}>
                <label htmlFor="birthday"> Ваша дата рождения
                </label>
                <input type="date" value='2000-05-05' />
            </div>
            <div className={regForm__gender}>
                <label htmlFor="gender">Ваш пол </label>
                <select className={regForm__genderSelect} name="gender-select" id="gender">
                    <option value="man">Мужской</option>
                    <option value="woman">Женский</option>
                </select>
            </div>
            <div className={regForm__agreement}>
                <input type="checkbox" id="agreement" />
                <label htmlFor="agreement">Я принимаю <a href="#">правила и условия пользовательского соглашения</a>
                </label>
            </div>
            <div className={regForm__confirmation}>
                <button type="submit">Регистрация</button>
            </div>
        </div>
    </div>
}

export default RegistrationForm; 