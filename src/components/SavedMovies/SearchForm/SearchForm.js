import React from "react";
import './SearchForm.css'

function SearchForm(props) {
  
  return (
    <section className="search-form">
        <form className="search-form__input-container">
            <input value={props.val || ""} onChange={props.handleChange} className="search-form__input" placeholder="Фильм" name="name" required></input>
            <button className={`search-form__button ${!props.isValid && "search-form__button_disabled"}`} disabled={!props.isValid} onClick={props.handleButtonClick}><div className="search-form__button-text"></div><div className="search-form__button-arrow"></div></button>
        </form>
    </section>
  );
}

export default SearchForm;