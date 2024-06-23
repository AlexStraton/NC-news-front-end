import axios from "axios";

const itemsAPI = axios.create({
  baseURL: "https://nc-news-project-1-zm9p.onrender.com/api",
});

export function getAllArticles() {
  return itemsAPI.get("/articles").then(({ data }) => {
    console.log(data.articles);
    return data.articles;
  });
}

export function getSingleArticle(article_id) {
  return itemsAPI.get(`/articles/${article_id}`).then(({ data }) => {
    console.log(data);
    return data.article;
  });
}

export function getCommentsByArticleId(article_id) {
  return itemsAPI.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
}

export function updateArticleVotes(article_id, count) {
  const votesBody = {
    inc_votes: count,
  };
  return itemsAPI
    .patch(`/articles/${article_id}`, votesBody)
    .then(({ data }) => {
      return data.article.votes;
    });
}

export function postComment(article_id, newCommentOBject) {
  return itemsAPI
    .post(`/articles/${article_id}/comments`, newCommentOBject)
    .then(({ data }) => {
      return data;
    });
}

export function deleteComment(comment_id) {
  return itemsAPI.delete(`/comments/${comment_id}`);
}

export function getTopics(topic) {
  return itemsAPI.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data;
  });
}

export function getArticlesByQuery(sort_by_query) {
  return itemsAPI.get(`/articles?sort_by=${sort_by_query}`).then(({ data }) => {
    console.log(data);

    return data;
  });
}
