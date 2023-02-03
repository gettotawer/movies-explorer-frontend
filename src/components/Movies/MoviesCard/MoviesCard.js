import React from 'react'
import './MoviesCard.css'

function MoviesCard (props) {
    const time = Math.floor(props.time/60) === 0 ? `${props.time}м` : `${Math.floor(props.time/60)}ч ${props.time - Math.floor(props.time/60) * 60}м` ;
    const [isSaved, setIsSaved] = React.useState(false);
    const [savedId, setSavedId] = React.useState();

    React.useEffect(() => {
        props.savedMovies.forEach((movie) => {
           if( movie.nameRU == props.card.nameRU){
            setIsSaved(true);
            setSavedId(movie._id)
           } else {
            setIsSaved(false)
           }
        })
    }, [props.savedMovies]);

    return (
        <div className="movies-card">
            <a href={props.card.trailerLink} className='movies-card__image' rel="noreferrer" target="_blank"><img className="movies-card__image" src={props.source} alt={`Постер к фильму "${props.name}"`}></img></a>
        <button className={`${isSaved ? "movies-card__save-button movies-card__save-button_saved" : "movies-card__save-button"}`} onClick={() => {
            if(!isSaved){
                props.handleSaveButtonCLick(props.card)
            } else {
                props.handleDeleteButtonCLick(savedId)
            }
            }}></button>
            <p className='movies-card__name'>{props.name}</p>
            <p className='movies-card__time'>{time}</p>
        </div>
    )
};

export default MoviesCard;
