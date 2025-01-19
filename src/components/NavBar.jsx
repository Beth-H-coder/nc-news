import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { capitaliseString } from "../utils";
import { getTopicsUrl } from "../api";
import UserProfileContext from "../userProfile/UserProfileContext";
import { useContext } from "react";
import axios from "axios";

function NavBar() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    let url = getTopicsUrl();
    axios
      .get(url)
      .then(({ data }) => {
        setLoaded(true);
        let result = data.topics;
        setTopics(result);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <nav className="bg-gray-800 pb-5">
      <div className="container mx-auto grid grid-cols-1 items-center">
        <ul className="flex justify-end space-x-12">
          <li>
            <Link
              className="text-gray-200 text-2xl hover:text-red-500 transition duration-500 ease-in-out m-2"
              to="/articles"
            >
              All Articles
            </Link>
          </li>
          {!loaded && ( // 1 Loading
            <li>
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </li>
          )}
          {loaded &&
            error && ( // 2 Error
              <li>
                <span className="text-white">Unable to retrieve topics</span>
              </li>
            )}
          {loaded &&
            !error && // 3 Success
            topics.map((topic) => (
              <li key={topic}>
                <Link
                  className="text-gray-200 text-2xl hover:text-red-500 transition duration-500 ease-in-out m-2"
                  to={`/topic/${topic.slug}`}
                >
                  {capitaliseString(topic.slug)}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
