import React from "react";
import Post from "../post/post";
import "./postsContainer.scss";

const PostsContainer = ({ postsState }) => {
  return (
    <div className="postsContainer">
      {postsState.posts.map(({ id, pseudonym, content, votes }) => {
        return (
          <Post
            key={id}
            id={id}
            pseudonym={pseudonym}
            content={content}
            votes={votes}
          />
        );
      })}
    </div>
  );
};

export default PostsContainer;
