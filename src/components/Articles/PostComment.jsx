import { useState } from "react";
import { postComment } from "../../assets/api-calls";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./PostComment.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function PostComment({ setComments, article_id }) {
  const [newComment, setNewComment] = useState("");
  const [loading, isLoading] = useState(false);

  const [err, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    isLoading(true);
    postComment(article_id, { username: "tickle122", body: newComment })
      .then((newCommentFromAPI) => {
        setComments((prevComments) => [
          newCommentFromAPI.comment,
          ...prevComments,
        ]);
        setNewComment("");
        isLoading(false);
      })
      .catch((err) => {
        setError(true);
        isLoading(false);
      });
  };
  const [show, setShow] = useState(false);
  const toast = (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>
          <Toast.Header>
            <small>1 min ago</small>
          </Toast.Header>
          <Toast.Body className='toast_body'>
            {err
              ? "Your comment has not been posted sucessfully. Please try again! "
              : "Your comment has been posted sucessfully!"}
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );

  if (loading) {
    return <p className='loading'>Your comment is being loaded...</p>;
  }

  return (
    <form className='comment-section' id='CommentAdder' onSubmit={handleSubmit}>
      {show ? toast : null}
      <FloatingLabel
        label='Comment'
        className='commentInput'
        htmlFor='newComment'>
        <Form.Control
          required
          as='textarea'
          placeholder='Leave a comment here'
          id='newComment'
          label='Write your comment here'
          rows={7}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </FloatingLabel>

      <Button
        onClick={() => setShow(true)}
        className='add-comment-btn'
        variant='primary'
        size='lg'
        type='submit'>
        Add Comment
      </Button>
    </form>
  );
}

export default PostComment;
