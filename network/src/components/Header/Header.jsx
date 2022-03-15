import React from 'react';
import logoSrc from "../../images/logo.webp"
import { header, logo, logoBlock, pageTitle, title, searchField, searchInput, startSerchingBtn } from "./Header.module.css";
// import avatar from '../../images/profile_pic/default_profile_img.jpg';

class Header extends React.Component {
  render() {
    return <header className={header}>
      <div className={logoBlock}>
        <img className={logo} src={logoSrc} alt="Логотип" />
      </div>
      <div className={pageTitle}>
        <h6 className={title}>{this.props.pageName}</h6>
      </div>
      <div className={searchField}>
        <input className={searchInput} type="text" placeholder="Искать друзей..." />
      </div>
      <button className={startSerchingBtn}>Начать поиск</button>
      <div className="control-block">
        <div className="friendsRequest"></div>
        <div className="lastMessages"></div>
        <div className="profileNotification"></div>
      </div>
      <div className="profileInfo">
        <div className="avatar">
          <img src="" alt="аватар пользователя" width="30" height="30" />
        </div>
      </div>
    </header>
  }
}

export default Header;