import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList (props) {


    return (
        <section className="movies-card-list">
            <div className="movies-card-list__container">
                {props.cards.map((card) => (
                    <MoviesCard source={card.source} name={card.name} time={card.time} isSaved={card.isSaved}/>
                ))}
            </div>
            <button className="movies-card-list__more-button">Ещё</button>
        </section>
    )
};

export default MoviesCardList;