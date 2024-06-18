import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../assets/api-calls";
import { useState } from "react";
import "./individualArticle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function IndividualArticle() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((article) => {
        //console.log(article);
        setSingleArticle(article);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <section className='individual_article'>
      <h1 className='heading'>{singleArticle.title}</h1>
      <img style={{ width: "28rem" }} src={singleArticle.article_img_url} />
      <h2>Written by: {singleArticle.author}</h2>
      <h2>Topic: {singleArticle.topic}</h2>
      <p className='text'>{singleArticle.body}</p>
      <p>
        <FontAwesomeIcon icon={faComment} />
        {singleArticle.comment_count}
      </p>
      <p>
        <FontAwesomeIcon icon={faThumbsUp} />
        {singleArticle.votes}
      </p>
    </section>
  );
}

export default IndividualArticle;
