import React from "react";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { useFormWithValidation } from "../../utils/Validation";

function Movies(props) {
  const [isChecked, setIsChecked] = React.useState(true);
  const [isButtonActive, setIsButtonActive] = React.useState(true);
  const [shownFilms, setShownFilms] = React.useState([]);
  const formValidation = useFormWithValidation();

  React.useEffect(()=> {
    if (localStorage.getItem('checkbox')) {
      setIsChecked(JSON.parse(localStorage.getItem('checkbox')));
    }
    if (localStorage.getItem('searchKeyword')) {
      formValidation.values.name = localStorage.getItem('searchKeyword')
    }
  },[])

    React.useEffect(()=> {
        if(window.screen.width >= 1280){
            setShownFilms(props.foundMovies.slice(0,12))
            setIsButtonActive(true);
            if(props.foundMovies.length === props.foundMovies.slice(0,12).length){
                setIsButtonActive(false);
            }
        } else if (window.screen.width >= 768){
            setShownFilms(props.foundMovies.slice(0,8))
            setIsButtonActive(true);
            if(props.foundMovies.length === props.foundMovies.slice(0,8).length){
                setIsButtonActive(false);
            }
        } else {
            setShownFilms(props.foundMovies.slice(0,5))
            setIsButtonActive(true);
            if(props.foundMovies.length === props.foundMovies.slice(0,5).length){
                setIsButtonActive(false);
            }
        }
    },[props.foundMovies])

    function handleShowMoreCards () {
      if(window.screen.width >= 1280 &&  props.foundMovies.length > shownFilms.length){
          const length = shownFilms.length
          const spreadArr = [].concat(shownFilms,props.foundMovies.slice(length, length + 3))
          setShownFilms(spreadArr)
          if(props.foundMovies.length === spreadArr.length){
              setIsButtonActive(false);
          }
      } else if(props.foundMovies.length > shownFilms.length){
          const length = shownFilms.length
          const spreadArr = [].concat(shownFilms,props.foundMovies.slice(length, length + 2))
          setShownFilms(spreadArr)
          if(props.foundMovies.length === spreadArr.length){
              setIsButtonActive(false);
          }
      }
  }

  const onClick = () => {
    setIsButtonActive(false);
    setIsChecked(!isChecked)
    props.handleSearchMovies(formValidation.values.name, !isChecked);
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