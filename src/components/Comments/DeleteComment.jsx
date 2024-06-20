import { deleteComment } from "../../assets/api-calls";
import Button from "react-bootstrap/Button";

function DeleteComment({ comment_id, onDelete }) {
  const handleDelete = () => {
    deleteComment(comment_id).then((response) => {
      console.log(response);
      onDelete(comment_id);
    });
  };

  return (
    <Button
      variant='primary'
      size='lg'
      onClick={() => handleDelete()}
      type='submit'>
      {" "}
      Delete comment
    </Button>
  );
}

export default DeleteComment;
