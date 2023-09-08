import { useEffect, useState } from "react";
import { voteOnArticleUrl } from "../api";
import axios from "axios";

function Vote(props) {
  const { voteCount, id } = props;

  const [votesTotal, setVotesTotal] = useState(voteCount);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClick = (num) => {
    let newTotal = votesTotal + num;
    newTotal = newTotal < 0 ? 0 : newTotal;
    //optimistically render and then call to server
    setVotesTotal(newTotal);
    let url = voteOnArticleUrl(id);
    axios
      .patch(url, {
        inc_votes: num,
      })
      .then((result) => {
        setSuccessMessage("Thanks for your vote!");
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      })
      .catch((error) => {
        setError(
          "Sorry - we were unable to record your vote. Please try again!"
        );
      });
  };

  return (
    <div className="error-message">
      {error && <h4>{error}</h4>}
      {!error && (
        <div className="success-message">
          <h4>{successMessage}</h4>
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
