import React from "react";
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound(props) {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена.</p>
      <button className="not-found__link" onClick={props.handleGoBack}>Назад</button>
      {/* <Link className="not-found__link" to="/">Назад</Link> */}
    </section>
  );
}

export default NotFound;
