import React, { useState } from "react";
import Header from "./components/header/header";
import Layout from "./components/layout/layout";
import PostsContainer from "./components/postsContainer/postsContainer";

function App() {
  const testPost = {
    id: 1,
    pseudonym: "Pythagoras",
    content:
      "TIL, a^2+b^2=c^2. If only I had an easy way to type that equation online!",
    votes: 293
  };

  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  return (
    <Layout>
      <Header postsState={{ posts, setPosts, id, setId }} />
      <PostsContainer postsState={{ posts, setPosts, id, setId }} />
    </Layout>
  );
}

export default App;
