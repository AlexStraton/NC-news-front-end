import axios from "axios";

const itemsAPI = axios.create({
  baseURL: "https://nc-news-project-1-zm9p.onrender.com/api",
});

export function getAllArticles() {
  return itemsAPI.get("/articles").then(({ data }) => {
    return data.articles;
  });
}

export function getSingleArticle(article_id) {
  return itemsAPI.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}

export function getCommentsByArticleId(article_id) {
  return itemsAPI.get(`/articles/${article_id}/comments`).then(({ data }) => {
    console.log(data);
    return data;
  });
}
