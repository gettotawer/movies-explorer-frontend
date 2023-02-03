import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from "../../Preloader/Preloader";

function MoviesCardList (props) {
    // const [isButtonActive, setIsButtonActive] = React.useState(true);
    // const [shownFilms, setShownFilms] = React.useState([]);

    // React.useEffect(()=> {
    //     if(window.screen.width >= 1280){
    //         setShownFilms(props.foundMovies.slice(0,12))
    //         setIsButtonActive(true);
    //         if(props.foundMovies.length === props.foundMovies.slice(0,12).length){
    //             setIsButtonActive(false);
    //         }
    //     } else if (window.screen.width >= 768){
    //         setShownFilms(props.foundMovies.slice(0,8))
    //         setIsButtonActive(true);
    //         if(props.foundMovies.length === props.foundMovies.slice(0,8).length){
    //             setIsButtonActive(false);
    //         }
    //     } else {
    //         setShownFilms(props.foundMovies.slice(0,5))
    //         setIsButtonActive(true);
    //         if(props.foundMovies.length === props.foundMovies.slice(0,5).length){
    //             setIsButtonActive(false);
    //         }
    //     }
    // },[props.foundMovies])

    // function handleShowMoreCards () {
    //     if(window.screen.width >= 1280 &&  props.foundMovies.length > props.shownFilms.length){
    //         const length = shownFilms.length
    //         const spreadArr = [].concat(shownFilms,props.foundMovies.slice(length, length + 3))
    //         setShownFilms(spreadArr)
    //         if(props.foundMovies.length === spreadArr.length){
    //             setIsButtonActive(false);
    //         }
    //     } else if(props.foundMovies.length > shownFilms.length){
    //         const length = shownFilms.length
    //         const spreadArr = [].concat(shownFilms,props.foundMovies.slice(length, length + 2))
    //         setShownFilms(spreadArr)
    //         if(props.foundMovies.length === spreadArr.length){
    //             setIsButtonActive(false);
    //         }
    //     }
    // }

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