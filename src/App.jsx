import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/Articles/Articles";
import { Routes, Route } from "react-router-dom";
import IndividualArticle from "./components/Articles/IndividualArticle";
import { useState } from "react";

function App() {
  //const [user, setUser] = useState("");

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ArticleList />} />
        <Route
          path='/articles/:article_id'
          element={<IndividualArticle />}></Route>
      </Routes>
    </>
  );
}

export default App;
