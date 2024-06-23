import { useState } from "react";
import { getAllArticles } from "../assets/api-calls";
import { useEffect } from "react";

import ArticleCard from "../Reusables/ArticleCard";
export default function HomePage() {
  const [randomArticles, setRandomArticles] = useState([]);

  function chooseLatestArticles(articles) {
    let newArray = [];
    for (let i = 0; i < 3; i++) {
      let article = articles[Math.floor(Math.random() * articles.length)];
      newArray.push(article);
    }
    return newArray;
  }

  useEffect(() => {
    getAllArticles()
      .then((articles) => {
        let chosenArticles = chooseLatestArticles(articles);
        setRandomArticles(chosenArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to NC NEWS</h1>
      <h2>STORY OF THE DAY</h2>
      {randomArticles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </div>
  );
}
