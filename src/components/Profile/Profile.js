import React from "react";
import './Profile.css'

function Profile(props) {
  return (
    <section className="profile">
        <h2 className="profile__greeting">Привет, {props.name}!</h2>
        <form className="profile__form">
            <div className="profile__input-container">
                <p className="profile__input-name">Имя</p>
                <input value={props.name} className="profile__input" placeholder="Введите имя"></input>
            </div>
            <div className="profile__input-container">
                <p className="profile__input-name">E-mail</p>
                <input value={props.email} className="profile__input" placeholder="Введите почту"></input>
            </div>
        </form>
        <button className="profile__edit-button">Редактировать</button>
        <button className="profile__logout-button">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;