import React from "react";
import './Header.css';
import logo from "../../images/logo.svg"
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className={`header ${props.isLoggedIn ? "" : "header_not-logged"}`}>
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип проекта"></img>
        <div className={`header__links-container ${props.isLoggedIn ? "" : "header__links-container_not-logged"}`}>
          <Link className="header__link-signup" to="/signup">Регистрация</Link>
          <Link className="header__link-signin" to="/signin">Войти</Link>
        </div>
        <div className={`header__links-container ${props.isLoggedIn ? "header__links-container_logged" : ""} header__links-container_active`}>
          <button className="header__close-menu-button"></button>
          <div className="header__films-links-container">
            <Link className="header__link-films header__link-films_main" to="/">Главная</Link>
            <Link className="header__link-films" to="/movies">Фильмы</Link>
            <Link className="header__link-films" to="/saved-movies">Сохраненные фильмы</Link>
          </div>
          <div className="header__account-links-container">
            <Link className="header__link-account" to="/profile">Аккаунт</Link>
            <div className="header__account-shortcut"></div>
          </div>
        </div>
        <button className={`header__open-menu-button ${props.isLoggedIn ? "" : "header__open-menu-button_not-logged"}`}></button>
      </div>
    </header>
  );
}

export default Header;
