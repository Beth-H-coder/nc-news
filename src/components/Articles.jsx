import { useEffect, useState } from "react";
import { getArticlesUrl } from "../api";
import axios from "axios";
import Article from "./Article";
import OrderBy from "./OrderBy";
import SortBy from "./SortBy";

function Articles(props) {
  const { num, subject } = props;
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  //state
  const [orderAsc, setOrderAsc] = useState(false);
  const [sortBy, setSortBy] = useState("created_at");
  //refactor later to use custom hook

  useEffect(() => {
    let url = getArticlesUrl();

    let params = [];

    //topic
    if (subject) {
      params = params.concat([`topic=${subject}`]);
    }
    //asc or desc
    if (orderAsc) {
      params = params.concat([`order=asc`]);
    }
    //sort by date, votes, no. of comments
    if (sortBy) {
      params = params.concat([`sort_by=${sortBy}`]);
    }

    url = `${url}?${params.join("&")}`;

    axios
      .get(url)
      .then((result) => {
        setLoaded(true);
        let data = result.data.articles;
        if (num) {
          data = data.splice(0, num);
        }
        setArticles(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [subject, orderAsc, sortBy]);

  const handleOrderBy = () => {
    setOrderAsc(!orderAsc);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  if (error) {
    return <h4 className="error">Sorry - there has been a problem.</h4>;
  }
  if (!loaded) {
    return <h4 className="loading">Loading data...</h4>;
  } else {
    return (
      <>
        <OrderBy action={handleOrderBy} order={orderAsc} />
        <SortBy action={handleSortBy} sort={sortBy} />
        <h4>
          Showing {articles.length} article{articles.length === 1 ? "" : "s"}
        </h4>
        {articles.map((article, i) => (
          <Article key={`${article} - ${i}`} data={article} summary={true} />
        ))}
      </>
    );
  }
}
export default Articles;
