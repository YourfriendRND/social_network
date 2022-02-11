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
            <Redirect to="/users"></Redirect>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// renderEntireTree(store); 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// 49 видео 43 минута