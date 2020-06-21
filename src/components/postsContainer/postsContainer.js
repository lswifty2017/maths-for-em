import React from "react";
import Post from "../post/post";
import "./postsContainer.scss";

const PostsContainer = () => {
  return (
    <div className="postsContainer">
      <Post
        pseudonym="Pythagoras"
        content="TIL, a^2+b^2=c^2. If only I had an easy way to type that equation online!"
        votes={11}
      />
      <Post
        pseudonym="Pythagoras"
        content="TIL, a^2+b^2=c^2. If only I had an easy way to type that equation online!"
        votes={-444}
      />
    </div>
  );
};

export default PostsContainer;
