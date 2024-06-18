import { useEffect, useState } from "react";
import { getAllArticles } from "../assets/api-calls";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Articles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

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
        return (
          <Card key={article.article_id} style={{ width: "18rem" }}>
            <Card.Img
              style={{ width: "18rem" }}
              variant='top'
              src={article.article_img_url}
            />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <ListGroup>
                <ListGroup.Item>Topic: {article.topic}</ListGroup.Item>
                <ListGroup.Item>Author: {article.author}</ListGroup.Item>
                <ListGroup.Item>
                  Date created: {article.created_at}
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon icon={faComment} /> {article.comment_count}
                </ListGroup.Item>
              </ListGroup>
              <Link to={`/articles/${article.article_id}`}>
                <p>Read article</p>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </section>
  );
}

export default ArticleList;
