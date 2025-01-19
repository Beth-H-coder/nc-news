import { useEffect, useState } from "react";
import { getArticlesUrl } from "../api";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import OrderBy from "./OrderBy";
import SortBy from "./SortBy";
import { capitaliseString } from "../utils";

function Articles({ num, subject }) {
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

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
        <h4 className="text-red-500">
          Sorry - there has been a problem. {error}
        </h4>
      )}
      {!loaded && <h4 className="text-blue-500 p-4">Loading data...</h4>}
      {loaded && (
        <>
          <div className="grid grid-cols-3 px-4 py-4 mb-2 border border-gray-400 border-y-2 ">
            <div className="flex justify-center items-center">
              <OrderBy action={handleOrderBy} order={orderAsc} />
            </div>
            <div className="flex justify-center items-center">
              <SortBy action={handleSortBy} sort={sortBy} />
            </div>
            <div className="flex justify-center items-center">
              <h4 className="text-lg font-semibold">
                Showing {articles.length} article
                {articles.length === 1 ? "" : "s"}
              </h4>
            </div>
          </div>

          <main>
            <div className="flex items-center justify-center h-20">
              {subject ? (
                <h1 className="text-2xl font-bold text-red-500 tracking-wider">
                  {capitaliseString(subject)}
                </h1>
              ) : num ? (
                <h1></h1>
              ) : (
                <h1 className="text-2xl font-bold text-red-500 tracking-wider">
                  All Articles
                </h1>
              )}
            </div>

            {/* <div className="grid grid-cols-2 md:grid-cols-3 p-8"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-8 p-6 pt-0">
              {articles.map((article, i) => (
                <ArticleCard key={`${article} - ${i}`} data={article} />
              ))}
            </div>
          </main>
        </>
      )}
    </>
  );
}
export default Articles;
