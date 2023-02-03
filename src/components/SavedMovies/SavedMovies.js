import React from "react";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import { useFormWithValidation } from "../../utils/Validation";

function SavedMovies(props) {

  const [isChecked, setIsChecked] = React.useState(true);
  const formValidation = useFormWithValidation();

  React.useEffect(()=>{
    props.getMovies()
  }, [])

  const onClick = () => {
    setIsChecked(!isChecked)
    props.handleSearchSavedMovies(formValidation.values.name, !isChecked);
  }

  function handleButtonClick(e){
    e.preventDefault();
    props.handleSearchSavedMovies(formValidation.values.name, isChecked);
  }

  return (
    <section className="saved-movies">
        <SearchForm 
          val={formValidation.values.name} 
          handleChange={formValidation.handleChange} 
          isValid={formValidation.isValid} 
          handleButtonClick={handleButtonClick}
        />
        <FilterCheckbox isChecked={isChecked} onClick={onClick}/>
        <MoviesCardList isPreloaderActive={props.isPreloaderActive} savedMovies={props.savedMovies} handleDeleteButtonCLick={props.handleDeleteButtonCLick}/>
        <Footer/>
    </section>
  );
}

export default SavedMovies;