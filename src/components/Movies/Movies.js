import React from "react";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import poster from "../../images/movieposter.png"

function Movies() {
  const cards = [{
    source: poster,
    name: '33 слова о дизайне',
    time: 77,
    isSaved: true,
},
{
    source: poster,
    name: 'Киноальманах «100 лет дизайна»',
    time: 77,
    isSaved: true,
},
{
    source: poster,
    name: 'В погоне за Бенкси',
    time: 77,
    isSaved: true,
},
{
    source: poster,
    name: 'Баския: Взрыв реальности',
    time: 77,
    isSaved: false,
},
{
    source: poster,
    name: 'Бег это свобода',
    time: 77,
    isSaved: false,
},
{
    source: poster,
    name: 'Книготорговцы',
    time: 77,
    isSaved: false,
},
{
    source: poster,
    name: 'Когда я думаю о Германии ночью',
    time: 77,
    isSaved: false,
},
{
    source: poster,
    name: 'Gimme Danger: История Игги и The Stooges',
    time: 77,
    isSaved: false,
},
{
    source: poster,
    name: 'Дженис: Маленькая девочка грустит',
    time: 77,
    isSaved: false,
},
{
    source: poster,
    name: 'Соберись перед прыжком',
    time: 77,
    isSaved: false,
},
{
    source: poster,
    name: 'Пи Джей Харви: A dog called money',
    time: 77,
    isSaved: false,
},
{
    source: poster,
    name: 'По волнам: Искусство звука в кино',
    time: 77,
    isSaved: false,
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

export default Movies;