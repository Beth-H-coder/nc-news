import { useEffect, useState } from "react";
import { voteOnArticle } from "../api";
import axios from "axios";

function Vote(props) {
  const { voteCount, id } = props;
  const [votesTotal, setVotesTotal] = useState(voteCount);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClick = (num) => {
    let newTotal = votesTotal + num;
    newTotal = newTotal < 0 ? 0 : newTotal;
    setVotesTotal(newTotal);
    let url = voteOnArticle(id);
    axios
      .patch(url, {
        inc_votes: num,
      })
      .then((result) => {
        setSuccessMessage("Your vote was successful!");
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="error-message">
      {error && (
        <p>Sorry - we were unable to record your vote. Please try again!</p>
      )}
      {!error && (
        <div className="success-message">
          <p>{successMessage}</p>
          <button
            className="button"
            onClick={() => handleClick(-1)}
            disabled={!votesTotal}
          >
            &darr;
          </button>
          <p>{` ${votesTotal} Votes `}</p>
          <button className="button" onClick={() => handleClick(1)}>
            &uarr;
          </button>
        </div>
      )}
    </div>
  );
}

export default Vote;
