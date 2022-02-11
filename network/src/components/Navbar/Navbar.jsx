import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Navbar.module.css";
import ContainerFriendsPreview from './FriendsPreview/ContainerFriendsPreview';

class Navbar extends React.Component {
    render() {
        return <aside className={style.sidebar}>
            <nav className="navigation">
                <ul className="list">
                    <li className={style.item}><NavLink className={style.itemLink} activeClassName={style.activeLink} to="profile">Профиль</NavLink></li>
                    <li className={style.item}><NavLink className={style.itemLink} activeClassName={style.activeLink} to="dialogs">Сообщения</NavLink></li>
                    <li className={style.item}><NavLink className={style.itemLink} activeClassName={style.activeLink} to="news">Новости</NavLink></li>
                    <li className={style.item}><NavLink className={style.itemLink} activeClassName={style.activeLink} to="music">Музыка</NavLink></li>
                    <li className={style.item}><NavLink className={style.itemLink} activeClassName={style.activeLink} to="users">Люди</NavLink></li>
                    <li className={style.item}><NavLink className={style.itemLink} activeClassName={style.activeLink} to="settings">Настройки</NavLink></li>
                </ul>
            </nav>
            <ContainerFriendsPreview></ContainerFriendsPreview>
        </aside>
    }
}

// const Navbar = () => {
//     const { sidebar, item, itemLink, activeLink } = style;
//     return <aside className={sidebar}>
//         <nav className="navigation">
//             <ul className="list">
//                 <li className={item}><NavLink className={itemLink} activeClassName={activeLink} to="profile">Профиль</NavLink></li>
//                 <li className={item}><NavLink className={itemLink} activeClassName={activeLink} to="dialogs">Сообщения</NavLink></li>
//                 <li className={item}><NavLink className={itemLink} activeClassName={activeLink} to="news">Новости</NavLink></li>
//                 <li className={item}><NavLink className={itemLink} activeClassName={activeLink} to="music">Музыка</NavLink></li>
//                 <li className={item}><NavLink className={itemLink} activeClassName={activeLink} to="users">Люди</NavLink></li>
//                 <li className={item}><NavLink className={itemLink} activeClassName={activeLink} to="settings">Настройки</NavLink></li>
//             </ul>
//         </nav>
//         <ContainerFriendsPreview></ContainerFriendsPreview>
//     </aside>
// };

export default Navbar;