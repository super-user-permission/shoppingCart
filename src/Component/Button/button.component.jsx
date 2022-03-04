import React from "react";
import "./button.styles.scss";

function Button({ text, onClick }) {
  return (
    <div className="button-cont">
      <button className="button-prm" onClick={() => onClick()}>
        {text}
      </button>
    </div>
  );
}

export default Button;
