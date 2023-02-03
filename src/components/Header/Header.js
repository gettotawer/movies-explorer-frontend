import React from "react";
import './Header.css';
import logo from "../../images/logo.svg"
import { Link } from 'react-router-dom';

function Header(props) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  function handleButtonClick(e) {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLinkClick(e) {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={`header ${props.isMainPage ? "header_main-page" : ""}`}>
      <div className="header__container">
        <Link to="/"><img className="header__logo" src={logo} alt="Логотип проекта"></img></Link>
        <div className={`header__links-container ${props.isLoggedIn ? "" : "header__links-container_not-logged"}`}>
          <Link className="header__link-signup" to="/signup" onClick={handleLinkClick}>Регистрация</Link>
          <Link className="header__link-signin" to="/signin"onClick={handleLinkClick}>Войти</Link>
        </div>
        <div className={`header__links-container ${props.isLoggedIn ? "header__links-container_logged" : ""}  ${isMenuOpen ? "header__links-container_active" : ""} `}>
          <button className="header__close-menu-button" onClick={handleButtonClick}></button>
          <div className="header__films-links-container">
            <Link className={`header__link-films header__link-films_main ${props.isMainPage ? "header__link-films_active" : ""}`} to="/" onClick={handleLinkClick}>Главная</Link>
            <Link className={`header__link-films ${props.isMoviesPage ? "header__link-films_active" : ""}`} to="/movies" onClick={handleLinkClick}>Фильмы</Link>
            <Link className={`header__link-films ${props.isSavedMoviesPage ? "header__link-films_active" : ""}`} to="/saved-movies" onClick={handleLinkClick}>Сохраненные фильмы</Link>
          </div>
          <div className="header__account-links-container">
            <Link className={`header__link-account ${props.isAccount ? "header__link-account_active" : ""}`} to="/profile" onClick={handleLinkClick}>Аккаунт</Link>
            <div className="header__account-shortcut"></div>
          </div>
        </div>
        <button className={`header__open-menu-button ${props.isLoggedIn ? "" : "header__open-menu-button_not-logged"} ${props.isMainPage ? "header__open-menu-button_main-page" : ""}`} onClick={handleButtonClick}></button>
      </div>
    </header>
  );
}

export default Header;
