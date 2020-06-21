import React from "react";
import Header from "./components/header/header";
import Layout from "./components/layout/layout";
import PostsContainer from "./components/postsContainer/postsContainer";

function App() {
  return (
    <Layout>
      <Header />
      <PostsContainer />
    </Layout>
  );
}

export default App;
