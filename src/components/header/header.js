import React from "react";
import Button from "../button/button";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">Maths For ‘em</div>
      <div className="header__button">
        <Button text="New Post" borderColor="purple" />
      </div>
    </div>
  );
};

export default Header;
