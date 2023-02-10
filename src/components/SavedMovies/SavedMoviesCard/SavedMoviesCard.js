import React from 'react'
// import './SavedMoviesCard.css'

function MoviesCard (props) {
    const time = Math.floor(props.time/60) === 0 ? `${props.time}м` : `${Math.floor(props.time/60)}ч ${props.time - Math.floor(props.time/60) * 60}м` ;
    return (
        <div className="movies-card">
            <a href={props.card.trailerLink} className='movies-card__image' rel="noreferrer" target="_blank"><img className="movies-card__image" src={props.source} alt={`Постер к фильму "${props.name}"`}></img></a>
            <button className='movies-card__delete-button' onClick={() => props.handleDeleteButtonCLick(props.card._id)}></button>
            <p className='movies-card__name'>{props.name}</p>
            <p className='movies-card__time'>{time}</p>
        </div>
    )
};

export default MoviesCard;
