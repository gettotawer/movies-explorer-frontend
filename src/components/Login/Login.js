import React from "react";
import logo from "../../images/logo.svg"
import "./Login.css"
import { Link } from 'react-router-dom';
import { useFormWithValidation } from "../../utils/Validation";
import "./Input.css"

function Login(props) {
  const formValidation = useFormWithValidation();

  function handleButtonClick(e) {
    e.preventDefault();
    props.onLogin(formValidation.values.email, formValidation.values.password);
  }

  return (
    <section className="login">
        <Link to="/"><img className="login__logo" src={logo} alt="Логотип проекта"></img></Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="logn__form">
          <div className="input">
            <p className="input__name">E-mail</p>
            <input value={formValidation.values.email || ''} onChange={formValidation.handleChange} className="input__input-field" type="email" pattern='^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$' placeholder="Введите ваш E-mail" name="email" required></input>
            <span id={`input-email-error`} className={`input__error ${formValidation.errors.password && "input__error_active"}`}>{formValidation.errors.email}</span>
          </div>
          <div className="input">
            <p className="input__name">Пароль</p>
            <input value={formValidation.values.password || ''} onChange={formValidation.handleChange} className="input__input-field" type="password" placeholder="Придумайте пароль." name="password" minLength="8" required></input>
            <span id={`input-password-error`} className={`input__error ${formValidation.errors.password && "input__error_active"}`}>{formValidation.errors.password}</span>
          </div>
          <button className={`login__button ${!formValidation.isValid && "login__button_disabled"}`} disabled={!formValidation.isValid} onClick={handleButtonClick}>Войти</button>
        </form>
        <p className="login__question">Еще не зарегистрированы?<Link className="login__link" to="/signup">Регистрация</Link></p>
    </section>
  );
}

export default Login;