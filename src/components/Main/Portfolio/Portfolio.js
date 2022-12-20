import React from "react";
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a className="portfolio__link" href="https://github.com/gettotawer/how-to-learn" rel="noreferrer" target="_blank">Статичный сайт<p className="portfolio__link-arrow">↗</p></a>
      <a className="portfolio__link" href="https://github.com/gettotawer/russian-travel" rel="noreferrer" target="_blank">Адаптивный сайт<p className="portfolio__link-arrow">↗</p></a>
      <a className="portfolio__link" href="https://github.com/gettotawer/react-mesto-api-full" rel="noreferrer" target="_blank">Одностраничное приложение<p className="portfolio__link-arrow">↗</p></a>
    </section>
  );
}

export default Portfolio;