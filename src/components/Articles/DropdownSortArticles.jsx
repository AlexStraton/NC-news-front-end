import "./DropdownSortArticles.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticlesByQuery } from "../../assets/api-calls";

function DropdownSort({ articleList, setArticleList }) {
  const [sortBy, setSortBy] = useState("");

  function handleChange(event) {
    setSortBy(event.target.value); //setting the state of dropdown list
    getArticlesByQuery(event.target.value).then((queriedArticles) => {
      setArticleList(queriedArticles.articles);
    });
  }
  //useSearchParams
  //once I ve fetched data inside handle change
  //use setSet to change the url from /articles to /articles?order=
  //useEffect- get sort from param url

  return (
    <label className='dropdown'>
      {" "}
      Sort by
      <select
        className='dowpdown-select-box'
        value={sortBy}
        onChange={handleChange}>
        <option value=''>Select</option>
        <option value='comment_count'>Comment count</option>
        <option value='created_at'>Date</option>
        <option value='votes'>Votes</option>
        <option value='topic'>Topic</option>
        <option value='author'>Author</option>
        <option value='title'>Title</option>
      </select>
    </label>
  );
}
export default DropdownSort;
