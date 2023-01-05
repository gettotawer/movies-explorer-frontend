import React from "react";
import './SearchForm.css'

function SearchForm() {
  return (
    <section className="search-form">
        <div className="search-form__input-container">
            <input className="search-form__input" placeholder="Фильм"></input>
            <button className="search-form__button"><div className="search-form__button-text"></div><div className="search-form__button-arrow"></div></button>
        </div>
    </section>
  );
}

export default SearchForm;