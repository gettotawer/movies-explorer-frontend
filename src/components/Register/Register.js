import React from "react";
import logo from "../../images/logo.svg"
import "./Register.css"
import { Link } from 'react-router-dom';
import Input from "./Input/Input";

function Register() {
  return (
    <section className="register">
        <img className="register__logo" src={logo} alt="Логотип проекта"></img>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
            <Input name={"Имя"} type={"text"} placeholder={"Введите ваше имя."} errname={"name"}/>
            <Input name={"E-mail"} type={"email"} placeholder={"Введите ваш E-mail"} errname={"name"}/>
            <Input name={"Пароль"} type={"password"} placeholder={"Придумайте пароль."} errname={"name"} error={"Что-то пошло не так..."} errclass={'input__error_active'}/>
            <button className="register__button">Зарегистрироваться</button>
        </form>
        <p className="register__question">Уже зарегистрированы?<Link className="register__link" to="/signin">Войти</Link></p>
    </section>
  );
}

export default Register;