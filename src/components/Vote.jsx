import { useEffect, useState } from "react";
import { voteOnArticleUrl } from "../api";
import axios from "axios";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Vote({ voteCount, id }) {
  const [votesTotal, setVotesTotal] = useState(voteCount);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
      .then(() => {
        setSuccessMessage("Thanks for your vote!");
        setShowModal(true);
        setTimeout(() => {
          setSuccessMessage(null);
          setShowModal(false);
        }, 3000);
      })
      .catch((error) => {
        setError(
          "Sorry - we were unable to record your vote. Please try again!"
        );
      });
  };

  return (
    <div className="flex items-center m-10  p-6">
      {error && <h4 className="text-red-600">{error}</h4>}
      {!error && (
        <div className="flex items-center">
          <p>Vote for your article!</p>

          <button
            className="bg-red-500 text-gray-100 p-2 rounded-lg mx-2 hover:bg-blue-600 transition duration-300"
            onClick={() => handleClick(-1)}
            disabled={!votesTotal}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <p className="text-xl font-semibold">Votes: {votesTotal}</p>
          <button
            className="bg-gray-900 text-gray-100 p-2 rounded-lg mx-2 hover:bg-green-600 transition duration-300"
            onClick={() => handleClick(1)}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      )}
      {showModal && (
        <Modal>
          <h4 className="text-green-600">{successMessage}</h4>
        </Modal>
      )}
    </div>
  );
}

export default Vote;
