import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../../assets/api-calls";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { convertDate } from "../../assets/utils";
import PostComment from "../Articles/PostComment";
import DeleteComment from "./DeleteComment";
import "./Comments.css";

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

  const handleCommentDelete = (comment_id) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== commentId)
    );
  };

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <section className='comments1'>
      <PostComment article_id={article_id} setComments={setComments} />
      {comments.map((comment) => (
        <Card className='comments' key={comment.comment_id}>
          <Card.Header className='author'>{comment.author}</Card.Header>
          <Card.Body>{comment.body}</Card.Body>
          <footer>
            {convertDate(comment.created_at)}
            <p>
              {" "}
              <FontAwesomeIcon icon={faThumbsUp} />
              {comment.votes}
            </p>
            <DeleteComment
              commentId={comment.comment_id}
              onDelete={handleCommentDelete}
            />
          </footer>
        </Card>
      ))}
    </section>
  );
}

export default Comments;
