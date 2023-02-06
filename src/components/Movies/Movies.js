import React from "react";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { useFormWithValidation } from "../../utils/Validation";
import {AmmountOfEddingCards, AmmountOfCards} from "../../Consts/AmmountOfCards"
import {ScreenSizes} from "../../Consts/ScreenSizes"

function Movies(props) {
  const [isChecked, setIsChecked] = React.useState(JSON.parse(localStorage.getItem('checkbox')) || false);
  const [isButtonActive, setIsButtonActive] = React.useState(true);
  const [shownFilms, setShownFilms] = React.useState([]);
  const formValidation = useFormWithValidation();

  React.useEffect(()=> {
    if (localStorage.getItem('searchKeyword')) {
      formValidation.values.name = localStorage.getItem('searchKeyword')
    }
    if(JSON.parse(localStorage.getItem('checkbox'))){
      props.handleClickCheckbox(JSON.parse(localStorage.getItem('filteredMovies')), JSON.parse(localStorage.getItem('checkbox')))
    }
  },[])

    React.useEffect(()=> {
        if(document.documentElement.clientWidth >= ScreenSizes.bigScreen){
            setShownFilms(props.foundMovies.slice(0,AmmountOfCards.bigScreen))
            setIsButtonActive(true);
            if(props.foundMovies.length === props.foundMovies.slice(0,AmmountOfCards.bigScreen).length){
                setIsButtonActive(false);
            }
        } else if (document.documentElement.clientWidth > ScreenSizes.mediumScreen){
            setShownFilms(props.foundMovies.slice(0,AmmountOfCards.mediumScreen))
            setIsButtonActive(true);
            if(props.foundMovies.length === props.foundMovies.slice(0,AmmountOfCards.mediumScreen).length){
                setIsButtonActive(false);
            }
        } else {
            setShownFilms(props.foundMovies.slice(0,AmmountOfCards.smallScreen))
            setIsButtonActive(true);
            if(props.foundMovies.length === props.foundMovies.slice(0,AmmountOfCards.smallScreen).length){
                setIsButtonActive(false);
            }
        }
    },[props.foundMovies])

    function handleShowMoreCards () {
      if(document.documentElement.clientWidth >= ScreenSizes.bigScreen &&  props.foundMovies.length > shownFilms.length){
          const length = shownFilms.length
          const spreadArr = [].concat(shownFilms,props.foundMovies.slice(length, length + AmmountOfEddingCards.bigScreen))
          setShownFilms(spreadArr)
          if(props.foundMovies.length === spreadArr.length){
              setIsButtonActive(false);
          }
      } else if(props.foundMovies.length > shownFilms.length){
          const length = shownFilms.length
          const spreadArr = [].concat(shownFilms,props.foundMovies.slice(length, length + AmmountOfEddingCards.mediumAndSmallScreen))
          setShownFilms(spreadArr)
          if(props.foundMovies.length === spreadArr.length){
              setIsButtonActive(false);
          }
      }
  }

  const onClick = () => {
    setIsButtonActive(false);
    setIsChecked(!isChecked)
    props.handleClickCheckbox(JSON.parse(localStorage.getItem('filteredMovies')), !isChecked);
  }

  function handleButtonClick(e){
    setIsButtonActive(false);
    e.preventDefault();
    props.handleSearchMovies(formValidation.values.name, isChecked);
  }

  return (
    <section className="movies">
        <SearchForm 
          val={formValidation.values.name} 
          handleChange={formValidation.handleChange} 
          isValid={formValidation.isValid} 
          handleButtonClick={handleButtonClick}
        />
        <FilterCheckbox 
          isChecked={isChecked} 
          onClick={onClick}
        />
        <MoviesCardList
          handleDeleteButtonCLick={props.handleDeleteButtonCLick}
          isButtonActive={isButtonActive}
          shownFilms={shownFilms}
          isPreloaderActive={props.isPreloaderActive} 
          foundMovies={props.foundMovies} 
          setFoundMovies={props.setFoundMovies} 
          handleSaveButtonCLick={props.handleSaveButtonCLick} 
          savedMovies={props.savedMovies} 
          setSavedMovies={props.setSavedMovies}
          handleShowMoreCards={handleShowMoreCards}
        />
        <Footer/>
    </section>
  );
}

export default Movies;