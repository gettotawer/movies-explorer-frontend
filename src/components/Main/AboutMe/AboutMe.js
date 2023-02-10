import React from "react";
import './AboutMe.css';
import myPic from "../../../images/myPic.jpg"

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__student-container">
            <h3 className="about-me__student-name">Максим</h3>
            <p className="about-me__student-shortly">Фронтенд-разработчик, 21 год</p>
            <p className="about-me__student-description">Я родился в Архангельске, в 18 лет поступил в Санкт-Петербургский Горный университет и переехал жить в Санкт-Петербург, в данный момент учусь по специальности "Электроника и наноэлектроника". Недавно я увлекся программированием, пошел на курсы от "Яндекс Практикум" и достиг там определенных успехов. В свободное время я люблю слушать подкасты, играть в настольный теннис и гулять по Питеру.</p>
            <a className="about-me__student-link" href="https://github.com/gettotawer" rel="noreferrer" target="_blank">Github</a>
        </div>
        <img src={myPic} alt="Моё фото" className="about-me__student-pic"></img>    
      </div>
    </section>
  );
}

export default AboutMe;