import React from "react";
import logo from "../../images/logo.svg"
import "./Register.css"
import { Link } from 'react-router-dom';
import "./Input.css"
import { useFormWithValidation } from "../../utils/Validation";

function Register(props) {
  const formValidation = useFormWithValidation();

  function handleButtonClick(e) {
    e.preventDefault();
    props.onRegister(formValidation.values.email,formValidation.values.name, formValidation.values.password);
  }

  return (
    <section className="register">
        <Link to="/"><img className="register__logo" src={logo} alt="Логотип проекта"></img></Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" noValidate>
        <div className="input">
          <p className="input__name">Имя</p>
          <input value={formValidation.values.name || ''} onChange={formValidation.handleChange} className="input__input-field" type="text" placeholder="Введите ваше имя." name="name" minLength="2" maxLength="30" required></input>
          <span id={`input-name-error`} className={`input__error ${formValidation.errors.name && "input__error_active"}`}>{formValidation.errors.name}</span>
        </div>
        <div className="input">
          <p className="input__name">E-mail</p>
          <input value={formValidation.values.email || ''} onChange={formValidation.handleChange} className="input__input-field" type="email" placeholder="Введите ваш E-mail." name="email" required></input>
          <span id={`input-email-error`} className={`input__error ${formValidation.errors.email && "input__error_active"}`}>{formValidation.errors.email}</span>
        </div>
        <div className="input">
          <p className="input__name">Пароль</p>
          <input value={formValidation.values.password || ''} onChange={formValidation.handleChange} className="input__input-field" type="password" placeholder="Придумайте пароль." name="password" minLength="8" required></input>
          <span id={`input-password-error`} className={`input__error ${formValidation.errors.password && "input__error_active"}`}>{formValidation.errors.password}</span>
        </div>
            <button className={`register__button ${!formValidation.isValid && "register__button_disabled"}`} disabled={!formValidation.isValid} onClick={handleButtonClick}>Зарегистрироваться</button>
        </form>
        <p className="register__question">Уже зарегистрированы?<Link className="register__link" to="/signin">Войти</Link></p>
    </section>
  );
}

export default Register;
