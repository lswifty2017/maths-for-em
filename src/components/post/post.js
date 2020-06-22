import React, { useState } from "react";
import "./post.scss";
import Button from "../button/button";
import Votes from "../votes/votes";
import ModalForm from "../modalForm/modalForm";

const Post = ({ id, pseudonym = "", content = "", votes = 0, postsState }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__votes">
          <Votes votes={votes} />
        </div>
        <div className="post__card">
          <div className="post__pseudonym">{pseudonym}</div>
          <div className="post__content">{content}</div>
          <div className="post__button">
            <Button
              text="Reply"
              borderColor="purple"
              fontColor="purple"
              onClick={toggleModal}
            />
            <ModalForm
              replyId={id}
              isOpen={isOpen}
              toggleFn={toggleModal}
              postsState={postsState}
            ></ModalForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
