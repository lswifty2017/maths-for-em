import React from "react";
import "./button.scss";

const Button = ({
  text = "",
  bgColor = "",
  borderColor = "",
  fontColor = "",
  onClick
}) => {
  let buttonClass = "button";
  let buttonTextClass = "button__text";

  if (bgColor === "purple") {
    buttonClass += " button--purple";
  }

  if (borderColor === "purple") {
    buttonClass += " button--border-purple";
  }

  if (fontColor === "purple") {
    buttonTextClass += " button__text--purple";
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      <div className={buttonTextClass}>{text}</div>
    </button>
  );
};

export default Button;
