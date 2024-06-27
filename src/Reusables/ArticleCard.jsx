import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { convertDate } from "../assets/utils";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function ArticleCard({ article, className }) {
  return (
    <Card
      className={`article-card ${className}`}
      key={article.article_id}
      style={{
        width: "18rem",
        margin: "20px",
        backgroundColor: "rgb(205, 240, 255",
      }}>
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
          <ListGroup.Item>{convertDate(article.created_at)}</ListGroup.Item>
          <ListGroup.Item
            style={{
              display: "flex",
              justifyContent: "right",

              fontWeight: "bold",
            }}>
            <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faComment} />
            <span
              style={{
                marginRight: "15px",
                fontWeight: "bold",
              }}>
              {article.comment_count}
            </span>
            <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faThumbsUp} />
            {article.votes}
          </ListGroup.Item>

          {/* this is where I can implement likes for each article*/}
        </ListGroup>
        <Link to={`/articles/${article.article_id}`}>
          <p>Read article</p>
        </Link>
      </Card.Body>
    </Card>
  );
}
