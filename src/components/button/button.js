import React from "react";
import "./button.scss";

const Button = ({ text = "", bgColor = "", borderColor = "" }) => {
  let className = "button";

  if (bgColor === "purple") {
    className += " button--purple";
  }

  if (borderColor === "purple") {
    className += " button--border-purple";
  }

  return (
    <button className={className}>
      <div className="button__text">{text}</div>
    </button>
  );
};

export default Button;
