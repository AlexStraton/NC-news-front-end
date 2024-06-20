import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../../assets/api-calls";
import { useState } from "react";
import "./individualArticle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Comments from "../Comments/Comments";
import Votes from "../Articles/Votes";

function IndividualArticle() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((article) => {
        setSingleArticle(article);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (loading) {
    return <p className='loading'>Loading...</p>;
  }

  return (
    <section className='individual_article'>
      <h1 className='heading'>{singleArticle.title}</h1>
      <img
        className='center'
        style={{ width: "48rem" }}
        src={singleArticle.article_img_url}
      />
      <div className='topic-author'>
        <h2>Written by: {singleArticle.author}</h2>
        <h2>Topic: {singleArticle.topic}</h2>
      </div>
      <p className='text'>{singleArticle.body}</p>
      <div>
        <Votes initialVotes={singleArticle.votes} />
      </div>
      <p className='comment-count-article'>
        <FontAwesomeIcon className='comment-count-space' icon={faComment} />
        {singleArticle.comment_count}
      </p>
      <Comments />
    </section>
  );
}

export default IndividualArticle;
