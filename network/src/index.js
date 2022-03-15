import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
            {/* <Redirect to="/profile"></Redirect> */}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// renderEntireTree(store); 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/** ДЗ
    1. Сверстать страницу авторизации
    2. Создать reducer для авторизации
    3. Написать серверную часть авторизации с cookie (изучить тему)
    4. Сохранить данные пользователя по ID и отрисовывать его данные на странице
 */