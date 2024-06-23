import "./DropdownSortArticles.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticlesByQuery } from "../../assets/api-calls";

function DropdownSort({ articleList, setArticleList }) {
  const [sortBy, setSortBy] = useState(""); //storing whatever select we re choosing

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
      <select value={sortBy} onChange={handleChange}>
        <option value=''>Select</option>
        <option value='comment_count'>Comment count</option>
        <option value='created_at'>Date</option>
        <option value='votes'>Votes</option>
      </select>
    </label>
  );
}
export default DropdownSort;
