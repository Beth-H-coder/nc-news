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
    console.log(params);
    //asc or desc
    if (orderAsc) {
      params = params.concat([`order=asc`]);
    }
    //sort by date, votes, no. of comments
    if (sortBy) {
      params = params.concat([`sort_by=${sortBy}`]);
    }

    url = `${url}?${params.join("&")}`;
    console.log(url);

    axios
      .get(url)
      .then((result) => {
        setLoaded(true);
        let data = result.data.articles;
        console.log(data);
        if (num) {
          data = data.splice(0, num);
        }
        setArticles(data);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        setError(error.response.data.msg);
      });
  }, [subject, orderAsc, sortBy]);

  const handleOrderBy = () => {
    setOrderAsc(!orderAsc);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <>
      {error && (
        <h4 className="error">Sorry - there has been a problem. {error}</h4>
      )}
      {!loaded && <h4 className="loading">Loading data...</h4>}
      {loaded && (
        <>
          <OrderBy action={handleOrderBy} order={orderAsc} />
          <SortBy action={handleSortBy} sort={sortBy} />
          <h4>
            Showing {articles.length} article{articles.length === 1 ? "" : "s"}
          </h4>
          <div className="gradient"></div>
          {articles.map((article, i) => (
            <Article key={`${article} - ${i}`} data={article} summary={true} />
          ))}
        </>
      )}
    </>
  );
  // return
  // {
  //   error && <h4 className="error">Sorry - there has been a problem.</h4>;
  // }
  // {
  //   !loaded && <h4 className="loading">Loading data...</h4>;
  // }
  // return (
  //   <>
  //     <OrderBy action={handleOrderBy} order={orderAsc} />
  //     <SortBy action={handleSortBy} sort={sortBy} />
  //     <h4>
  //       Showing {articles.length} article{articles.length === 1 ? "" : "s"}
  //     </h4>
  //     <div className="gradient"></div>
  //     {articles.map((article, i) => (
  //       <Article key={`${article} - ${i}`} data={article} summary={true} />
  //     ))}
  //   </>
  // );
}
export default Articles;
