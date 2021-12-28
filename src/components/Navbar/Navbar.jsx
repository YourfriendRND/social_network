import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Navbar.module.css"; 
import ContainerFriends from './Friends/ContainerFriends';

const Navbar = () => {
    const {sidebar, item, itemLink, activeLink} = style;   
    return <aside className={sidebar}>
        <nav className="navigation">
            <ul className="list">
                <li className={item}><NavLink className={itemLink} activeClassName={activeLink} to="profile">Профиль</NavLink></li>
                <li className={item}><NavLink className={itemLink} activeClassName={activeLink} to="dialogs">Сообщения</NavLink></li>
                <li className={item}><NavLink className={itemLink} activeClassName={activeLink} to="news">Новости</NavLink></li>
                <li className={item}><NavLink className={itemLink} activeClassName={activeLink} to="music">Музыка</NavLink></li>
                <li className={item}><NavLink className={itemLink} activeClassName={activeLink} to="settings">Настройки</NavLink></li>
            </ul>
        </nav>
        <ContainerFriends></ContainerFriends>
    </aside>
};

export default Navbar;