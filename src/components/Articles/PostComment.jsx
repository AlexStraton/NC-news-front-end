import { useState } from "react";
import { postComment } from "../../assets/api-calls";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./PostComment.css";
import Button from "react-bootstrap/Button";

function PostComment({ setComments, article_id }) {
  const [newComment, setNewComment] = useState("");
  const [loading, isLoading] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    postComment(article_id, { username: "tickle122", body: newComment })
      .then((newCommentFromAPI) => {
        isLoading(true);
        setComments((prevComments) => [
          newCommentFromAPI.comment,
          ...prevComments,
        ]);
        setNewComment("");
        isLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return <p className='loading'>Your comment is being loaded...</p>;
  }

  return (
    <form className='comment-section' id='CommentAdder' onSubmit={handleSubmit}>
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
