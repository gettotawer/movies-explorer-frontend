import React from 'react'
import './MoviesCard.css'

function MoviesCard (props) {
    const time = Math.floor(props.time/60) === 0 ? `${props.time}м` : `${Math.floor(props.time/60)}ч ${props.time - Math.floor(props.time/60) * 60}м` ;

    return (
        <div className="movies-card">
            <img className="movies-card__image" src={props.source} alt={`Постер к фильму "${props.name}"`}></img>
            <button className={`${props.isSaved ? "movies-card__delete-button" : "movies-card__save-button"}`}></button>
            <p className='movies-card__name'>{props.name}</p>
            <p className='movies-card__time'>{time}</p>
        </div>
    )
};

export default MoviesCard;
