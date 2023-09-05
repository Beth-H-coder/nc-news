import { useEffect, useState } from "react";
import { voteOnArticle } from "../api";
import axios from "axios";

function Vote(props) {
  const { voteCount, id } = props;
  const [votesTotal, setVotesTotal] = useState(voteCount);
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = (num) => {
    let newTotal = votesTotal + num;
    //TODO - votes not less than 0
    newTotal = newTotal < 0 ? 0 : newTotal;
    setLoaded(false);
    let url = voteOnArticle(id);
    axios.get(url).then(
      (result) => {
        setLoaded(true);
        setVotesTotal(newTotal);
      },
      (error) => {
        setError(error);
      }
    );
  };

  return (
    <div>
      {!loaded && <p>Loading data...</p>}
      {loaded && error && (
        <p>Sorry - we were unable to record your vote. Please try again!</p>
      )}
      {loaded && (
        <>
          <button className="button" onClick={() => handleClick(-1)}>
            &darr;
          </button>
          {` ${votesTotal} `}
          <button className="button" onClick={() => handleClick(1)}>
            &uarr;
          </button>
        </>
      )}
    </div>
  );
}

export default Vote;
