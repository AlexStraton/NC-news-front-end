import { useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { updateArticleVotes } from "../assets/api-calls";

function Votes({ initialVotes, count }) {
  const { article_id } = useParams();
  const [votes, setVotes] = useState(initialVotes);

  const handleClickUp = () => {
    updateArticleVotes(article_id, 1)
      .then((updatedVotes) => {
        setVotes(updatedVotes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickDown = () => {
    updateArticleVotes(article_id, -1)
      .then((updatedVotes) => {
        setVotes(updatedVotes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <span>
      {votes}
      <button onClick={handleClickUp}>
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button onClick={handleClickDown}>
        <FontAwesomeIcon icon={faThumbsDown} />
      </button>
    </span>
  );
}

export default Votes;
