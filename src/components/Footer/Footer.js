import React from "react";
import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__links-container">
            <p className="footer__date">©2022</p>
            <div className="footer__socials-container">
                <a className="footer__link" href="https://practicum.yandex.ru/" rel="noreferrer" target="_blank">Яндекс.Практикум</a>
                <a className="footer__link" href="https://github.com/gettotawer" rel="noreferrer" target="_blank">Github</a>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
