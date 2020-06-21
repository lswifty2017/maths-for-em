import React from "react";
import "./button.scss";

const Button = ({
  text = "",
  bgColor = "",
  borderColor = "",
  fontColor = ""
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
    <button className={buttonClass}>
      <div className={buttonTextClass}>{text}</div>
    </button>
  );
};

export default Button;
