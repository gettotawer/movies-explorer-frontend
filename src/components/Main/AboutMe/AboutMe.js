import React from "react";
import './AboutMe.css';
import myPic from "../../../images/mypicpng.png"

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__student-container">
            <h3 className="about-me__student-name">Виталий</h3>
            <p className="about-me__student-shortly">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__student-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className="about-me__student-link" href="https://github.com/gettotawer" rel="noreferrer" target="_blank">Github</a>
        </div>
        <img src={myPic} alt="Моё фото" className="about-me__student-pic"></img>    
      </div>
    </section>
  );
}

export default AboutMe;