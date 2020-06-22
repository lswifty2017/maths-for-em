import React from "react";
import Post from "../post/post";
import Thread from "../thread/thread";
import "./postsContainer.scss";

const PostsContainer = ({ postsState }) => {
  const replyPosts = postsState.posts.filter(post => {
    if (post.replyId) {
      return post;
    }
  });

  const threads = postsState.posts.map(post => {
    const thread = [];

    if (!post.replyId) {
      //logic needs to change for more subthreading
      thread.push(post);
    }

    replyPosts.forEach(replyPost => {
      if (replyPost.replyId === post.id) {
        thread.push(replyPost);
      }
    });

    return thread;
  });

  return (
    <div className="postsContainer">
      {threads.map((thread, i) => {
        return (
          <Thread key={i}>
            {thread.map(({ id, pseudonym, content, votes, replyId = null }) => {
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
        );
      })}
    </div>
  );
};

export default PostsContainer;
