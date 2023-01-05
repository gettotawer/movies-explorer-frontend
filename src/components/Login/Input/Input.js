import React from "react";
import "./Input.css"

function Input(props) {
  return (
    <div className="input">
        <p className="input__name">{props.name}</p>
        <input className="input__input-field" type={props.type} placeholder={props.placeholder}></input>
        <span id={`input-${props.errname}-error`} className={`input__error ${props.errclass}`}>{props.error}</span>
    </div>
  );
}

export default Input;