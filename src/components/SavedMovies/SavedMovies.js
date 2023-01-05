import React from "react";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import poster from "../../images/movieposter.png"

function SavedMovies() {
  const cards = [{
    source: poster,
    name: '33 слова о дизайне',
    time: 77,
    isSaved:true,
},
{
    source: poster,
    name: 'Киноальманах «100 лет дизайна»',
    time: 77,
    isSaved:true,
},
{
    source: poster,
    name: 'В погоне за Бенкси',
    time: 77,
    isSaved:true,
}]

  return (
    <section className="movies">
        <SearchForm/>
        <FilterCheckbox/>
        <MoviesCardList cards={cards}/>
        <Footer/>
    </section>
  );
}

export default SavedMovies;