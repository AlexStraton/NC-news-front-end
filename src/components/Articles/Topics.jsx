import { useParams } from "react-router-dom";
import { getTopics } from "../../assets/api-calls";
import { useEffect, useState } from "react";
import ArticleCard from "../../Reusables/ArticleCard";
import "./Topics.css";

function Topics() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopics(topic)
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [topic]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1>You are viewing all the {topic} articles </h1>
      <section className='articles-section'>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </>
  );
}

export default Topics;
