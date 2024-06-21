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
import { UserContext } from "../Users/UserContext";
import { useContext } from "react";

function Comments() {
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
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
      prevComments.filter((comment) => comment.comment_id !== comment_id)
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
          <footer className='comment-Footer'>
            {convertDate(comment.created_at)}
            <p>
              {" "}
              <FontAwesomeIcon icon={faThumbsUp} />
              {comment.votes}
            </p>
            {user === comment.author ? (
              <DeleteComment
                comment_id={comment.comment_id}
                onDelete={handleCommentDelete}
                comment_author={comment.author}
              />
            ) : null}
          </footer>
        </Card>
      ))}
    </section>
  );
}

export default Comments;
