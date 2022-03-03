import React from "react";
import "./input.styles.scss";

function Input({ id, type, placeholder, text }) {
  return (
    <div className="input-container">
      <input className="input" id={id} type={type} placeholder={placeholder} />
      <label className="placeholder" htmlFor={id}> {text} </label>
    </div>
  );
}

export default Input;
