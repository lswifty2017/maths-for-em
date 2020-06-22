import React, { useState } from "react";
import Button from "../button/button";
import ModalForm from "../modalForm/modalForm";
import "./header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="header__title">Maths For ‘em</div>
      <div className="header__button">
        <Button text="New Post" borderColor="purple" onClick={toggleModal} />
        <ModalForm isOpen={isOpen} toggleFn={toggleModal}></ModalForm>
      </div>
    </div>
  );
};

export default Header;
