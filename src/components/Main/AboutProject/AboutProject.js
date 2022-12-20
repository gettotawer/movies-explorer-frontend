import React from "react";
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__description-container">
        <p className="about-project__description-title">Дипломный проект включал 5 этапов</p>
        <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="about-project__description-title">На выполнение диплома ушло 5 недель</p>
        <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__progress-container">
        <p className="about-project__progress-title">1 неделя</p>
        <p className="about-project__progress-title">4 недели</p>
        <p className="about-project__progress-description">Back-end</p>
        <p className="about-project__progress-description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
