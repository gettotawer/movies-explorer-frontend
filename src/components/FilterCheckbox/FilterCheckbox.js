import React from "react";
import './FilterCheckbox.css'

function FilterCheckbox() {
  const [isChecked, setIsChecked] = React.useState(true);

  const onClick = () => {
    setIsChecked(!isChecked)
  }

  return (
    <section className="filter-checkbox">
        <div className="filter-checkbox__container">
            <input type="checkbox" className="filter-checkbox__checkbox" id="checkbox-animation" checked={isChecked} onChange={onClick}></input>
            <label className="filter-checkbox__checkbox-label" htmlFor="checkbox-animation"></label>
            <p className="filter-checkbox__text">Короткометражки</p>
        </div>
        <div className="line"></div>
    </section>
  );
}

export default FilterCheckbox;