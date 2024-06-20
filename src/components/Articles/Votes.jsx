import { useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { updateArticleVotes } from "../../assets/api-calls";
import "./Votes.css";
import Button from "react-bootstrap/Button";

function Votes({ initialVotes, count }) {
  const { article_id } = useParams();
  const [votes, setVotes] = useState(initialVotes);
  const [upButtonDisabled, setUpButtonDisabled] = useState(false);
  const [downButtonDisabled, setDownButtonDisabled] = useState(false);

  const handleClickUp = () => {
    updateArticleVotes(article_id, 1)
      .then((updatedVotes) => {
        setVotes(updatedVotes);
        setUpButtonDisabled(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickDown = () => {
    updateArticleVotes(article_id, -1)
      .then((updatedVotes) => {
        setVotes(updatedVotes);
        setDownButtonDisabled(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='thumbs-icons-container'>
      {" "}
      {votes} votes
      <Button
        className='thumbs-button'
        disabled={upButtonDisabled}
        onClick={handleClickUp}
        variant='primary'
        size='lg'>
        <FontAwesomeIcon className='thumbs-icons' icon={faThumbsUp} />
      </Button>
      <Button
        className='thumbs-button'
        disabled={downButtonDisabled}
        onClick={handleClickDown}
        variant='primary'
        size='lg'>
        <FontAwesomeIcon className='thumbs-icons' icon={faThumbsDown} />
      </Button>
    </div>
  );
}

export default Votes;
