import { deleteComment } from "../../assets/api-calls";
import Button from "react-bootstrap/Button";
import { UserContext } from "../Users/UserContext";
import { useContext } from "react";
import { useState } from "react";

function DeleteComment(props) {
  const { comment_id, onDelete, comment_author } = props;
  const { user } = useContext(UserContext);
  const [loading, isLoading] = useState(true);
  const [err, setError] = useState(false);

  const handleDelete = () => {
    if (user === comment_author) {
      deleteComment(comment_id).then((response) => {
        isLoading(true);
        onDelete(comment_id);
        isLoading(false);
      });
    }
  };

  if (loading) {
    return <p className='loading'>Your comment is being loaded...</p>;
  }

  return (
    <Button variant='primary' size='lg' onClick={handleDelete} type='submit'>
      {" "}
      Delete comment
    </Button>
  );
}

export default DeleteComment;
