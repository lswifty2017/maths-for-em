import React from "react";
import Post from "../post/post";
import Thread from "../thread/thread";
import "./postsContainer.scss";

const PostsContainer = ({ postsState }) => {
  return (
    <div className="postsContainer">
      <Thread>
        {postsState.posts.map(({ id, pseudonym, content, votes }) => {
          return (
            <Post
              key={id}
              id={id}
              pseudonym={pseudonym}
              content={content}
              votes={votes}
              postsState={postsState}
            />
          );
        })}
      </Thread>
    </div>
  );
};

export default PostsContainer;
