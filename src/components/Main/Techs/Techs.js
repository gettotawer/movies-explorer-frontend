import React from "react";
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__technologies-container">
          <p className="techs__technologies-item">HTML</p>
          <p className="techs__technologies-item">CSS</p>
          <p className="techs__technologies-item">JS</p>
          <p className="techs__technologies-item">React</p>
          <p className="techs__technologies-item">Git</p>
          <p className="techs__technologies-item">Express.js</p>
          <p className="techs__technologies-item">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;