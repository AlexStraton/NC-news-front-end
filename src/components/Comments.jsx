import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../assets/api-calls";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { convertDate } from "../assets/utils";

function Comments() {
  const { article_id } = useParams();

  const [comments, setComments] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
      isLoading(false);
    });
  }, []);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <section>
      {comments.map((comment) => (
        <Card key={comment.comment_id}>
          <Card.Header>{comment.author}</Card.Header>
          <Card.Body>{comment.body}</Card.Body>
          <footer>
            {convertDate(comment.created_at)}
            <p>
              {" "}
              <FontAwesomeIcon icon={faThumbsUp} />
              {comment.votes}
            </p>
          </footer>
        </Card>
      ))}
    </section>
  );
}

export default Comments;
