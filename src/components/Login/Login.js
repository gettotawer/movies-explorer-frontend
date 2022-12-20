import React from "react";
import logo from "../../images/logo.svg"
import "./Login.css"
import { Link } from 'react-router-dom';
import Input from "./Input/Input";

function Login() {
  return (
    <section className="login">
        <img className="login__logo" src={logo} alt="Логотип проекта"></img>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="logn__form">
          <Input name={"E-mail"} type={"email"} placeholder={"Введите ваш E-mail"} errname={"name"}/>
          <Input name={"Пароль"} type={"password"} placeholder={"Придумайте пароль."} errname={"name"}/>
          <button className="login__button">Войти</button>
        </form>
        <p className="login__question">Еще не зарегистрированы?<Link className="login__link" to="/signup">Регистрация</Link></p>
    </section>
  );
}

export default Login;