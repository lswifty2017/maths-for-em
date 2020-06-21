import React from "react";
import "./post.scss";
import Button from "../button/button";
import Votes from "../votes/votes";

const Post = ({ pseudonym = "", content = "", votes = 0 }) => {
  return (
    <div className="post">
      <div className="post__votes">
        <Votes votes={votes} />
      </div>
      <div className="post__card">
        <div className="post__pseudonym">{pseudonym}</div>
        <div className="post__content">{content}</div>
        <div className="post__button">
          <Button text="Reply" borderColor="purple" fontColor="purple" />
        </div>
      </div>
    </div>
  );
};

export default Post;
