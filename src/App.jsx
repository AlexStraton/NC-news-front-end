import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/Articles";
import { Routes, Route } from "react-router-dom";
import IndividualArticle from "./components/IndividualArticle";

function App() {
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
