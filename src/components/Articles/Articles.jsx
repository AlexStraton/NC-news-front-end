import { useEffect, useState } from "react";
import { getAllArticles } from "../../assets/api-calls";
import "./Articles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ArticleCard from "../../Reusables/ArticleCard";

function ArticleList() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticleList(articles);
    });
  }, []);

  return (
    <section className='articles-section'>
      {articleList.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
}

export default ArticleList;
