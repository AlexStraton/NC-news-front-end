import { useEffect, useState } from "react";
import { getAllArticles } from "../../assets/api-calls";
// import "../../Reusables/ArticleCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Articles.css";
import ArticleCard from "../../Reusables/ArticleCard";
import DropdownSort from "./DropdownSortArticles";
function ArticleList() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticleList(articles);
    });
  }, []);

  return (
    <>
      <DropdownSort articleList={articleList} setArticleList={setArticleList} />
      <section
        className='articles-section'
        style={{
          backgroundColor: "rgb(11, 11, 52)",
          height: "fit-content",
        }}>
        {articleList.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </>
  );
}

export default ArticleList;
