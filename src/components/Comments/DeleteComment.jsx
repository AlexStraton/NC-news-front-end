import { deleteComment } from "../../assets/api-calls";
import Button from "react-bootstrap/Button";
import { UserContext } from "../Users/UserContext";
import { useContext } from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function DeleteComment(props) {
  const { comment_id, onDelete, comment_author } = props;
  const { user } = useContext(UserContext);
  const [err, setError] = useState(false);

  const handleDelete = () => {
    deleteComment(comment_id);
    onDelete(comment_id);
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
              ? "Your comment has not been deleted sucessfully. Please try again! "
              : "Your comment has been deleted sucessfully!"}
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );

  return (
    <div>
      {show ? toast : null}

      <Button
        variant='primary'
        size='lg'
        onClick={() => {
          setShow(true);
          handleDelete;
        }}
        type='submit'>
        Delete comment
      </Button>
    </div>
  );
}

export default DeleteComment;
