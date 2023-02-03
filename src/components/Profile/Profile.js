import React from "react";
import './Profile.css';
import { useFormWithValidation } from "../../utils/Validation";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext"
import * as Auth from '../../utils/Auth.js'

function Profile(props) {
  const formValidation = useFormWithValidation();
  
  const userData = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    formValidation.setValues(userData);
  },[])

  function handleLogOutButtonCick(e) {
    e.preventDefault();
    props.onSignOut();
  }

  function handleProfileChangeButtonClick(e) {
    e.preventDefault();
    props.onProfileChange(formValidation.values.name, formValidation.values.email);
  }

  return (
    <section className="profile">
        <h2 className="profile__greeting">Привет, {props.userData.name}!</h2>
        <form className="profile__form">
            <div className="profile__input-container">
              <p className="profile__input-name">Имя</p>
              <input value={formValidation.values.name || ''} onChange={formValidation.handleChange} className="profile__input" type="text" placeholder="Введите ваше имя." name="name" minLength="2" maxLength="30" required></input>
              <span className={`profile__error ${formValidation.errors.name && "profile__error_active"}`}>{formValidation.errors.name}</span>
            </div>
            <div className="profile__input-container">
              <p className="profile__input-name">E-mail</p>
              <input value={formValidation.values.email || ''} onChange={formValidation.handleChange} className="profile__input" type="email" placeholder="Введите ваш E-mail." name="email" required></input>
              <span className={`profile__error ${formValidation.errors.email && "profile__error_active"}`}>{formValidation.errors.email}</span>
            </div>
        </form>
        <button className={`profile__edit-button ${!formValidation.isValid && "profile__edit-button_disabled"}`} onClick={handleProfileChangeButtonClick} disabled={!formValidation.isValid}>Редактировать</button>
        <button className="profile__logout-button" onClick={handleLogOutButtonCick}>Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;