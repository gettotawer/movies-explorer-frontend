import React from 'react'
import './SavedMoviesCardList.css'
import MoviesCard from '../SavedMoviesCard/SavedMoviesCard'
import Preloader from "../../Preloader/Preloader";

function MoviesCardList (props) {

    return (
        <section className="movies-card-list">
            <div className="movies-card-list__container">
                {props.isPreloaderActive && <Preloader/>}
                {!props.isPreloaderActive && props.savedMovies && props.savedMovies.slice(0).reverse().map((card) => (
                    <MoviesCard
                    key={card._id}
                    card = {card}
                    handleDeleteButtonCLick={props.handleDeleteButtonCLick}
                    name = {card.nameRU}
                    time = {card.duration}
                    source = {card.thumbnail}
                    />
                ))}
                {props.savedMovies.length === 0 && !props.isPreloaderActive && <p className='movies-card-list_not-found'>Ничего не найдено</p>}
            </div>
        </section>
    )
};

export default MoviesCardList;