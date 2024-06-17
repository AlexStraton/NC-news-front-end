import axios from "axios";

const itemsAPI = axios.create({
  baseURL: "https://nc-news-project-1-zm9p.onrender.com/api",
});

export function getAllArticles() {
  return itemsAPI.get("/articles").then(({ data }) => {
    return data.articles;
  });
}
