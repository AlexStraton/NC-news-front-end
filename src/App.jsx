import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/Articles/Articles";
import { Routes, Route } from "react-router-dom";
import IndividualArticle from "./components/Articles/IndividualArticle";
import Topics from "./components/Articles/Topics";
import NavBar from "./components/Nav_bar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/articles' element={<ArticleList />} />
        <Route
          path='/articles/:article_id'
          element={<IndividualArticle />}></Route>
        <Route path='/articles/topic/:topic' element={<Topics />} />
      </Routes>
    </>
  );
}

export default App;
