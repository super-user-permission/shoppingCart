import React from "react";
import "./button.styles.scss";

function Button({ text }) {
  return (
    <div className="button-cont">
      <button className="button-prm">{text}</button>
    </div>
  );
}

export default Button;
