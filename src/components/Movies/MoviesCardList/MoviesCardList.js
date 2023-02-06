import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from "../../Preloader/Preloader";

function MoviesCardList (props) {

    return (
        <section className="movies-card-list">
            <div className="movies-card-list__container">
                {props.isPreloaderActive && <Preloader/>}
                {!props.isPreloaderActive && props.foundMovies && props.shownFilms.map((card) => (
                    <MoviesCard 
                    card = {card}
                    handleSaveButtonCLick = {props.handleSaveButtonCLick}
                    handleDeleteButtonCLick = {props.handleDeleteButtonCLick}
                    key={card.id}
                    name={card.nameRU}
                    time={card.duration}
                    savedMovies={props.savedMovies}
                    source={`https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`}
                    />
                ))}
                {props.shownFilms.length === 0 && !props.isPreloaderActive && <p className='movies-card-list_not-found'>Ничего не найдено</p>}
            </div>
            <button className={`movies-card-list__more-button ${props.isButtonActive && "movies-card-list__more-button_active"}`} onClick={props.handleShowMoreCards}>Ещё</button>
        </section>
    )
};

export default MoviesCardList;