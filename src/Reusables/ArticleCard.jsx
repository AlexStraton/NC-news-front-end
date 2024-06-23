import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { convertDate } from "../assets/utils";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./ArticleCard.css";

export default function ArticleCard({ article }) {
  return (
    <Card
      className='each-article'
      key={article.article_id}
      style={{ width: "18rem" }}>
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
          <ListGroup.Item>
            <FontAwesomeIcon icon={faComment} /> {article.comment_count}
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon icon={faThumbsUp} /> {article.votes}
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
