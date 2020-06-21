import React, { useState } from "react";
import "./votes.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Votes = ({ votes }) => {
  let [upVoteClass, setUpVoteClass] = useState("votes__vote");
  let [downVoteClass, setDownVoteClass] = useState("votes__vote");
  let [upVotedStatus, setUpVotedStatus] = useState(false);
  let [downVotedStatus, setDownVotedStatus] = useState(false);
  let [count, setCount] = useState(votes);

  const upVote = () => {
    if (!upVotedStatus) {
      setCount(count + 1);
      setUpVoteClass("votes__vote votes__vote--green");
      setDownVoteClass("votes__vote");
      setUpVotedStatus(true);
      setDownVotedStatus(false);
    } else {
      setCount(count - 1);
      setUpVoteClass("votes__vote");
      setDownVoteClass("votes__vote");
      setUpVotedStatus(false);
      setDownVotedStatus(false);
    }
  };

  const downVote = () => {
    if (!downVotedStatus) {
      setCount(count - 1);
      setDownVoteClass("votes__vote votes__vote--red");
      setUpVoteClass("votes__vote");
      setUpVotedStatus(false);
      setDownVotedStatus(true);
    } else {
      setCount(count + 1);
      setDownVoteClass("votes__vote");
      setUpVoteClass("votes__vote");
      setDownVotedStatus(false);
      setUpVotedStatus(false);
    }
  };

  return (
    <div className="votes">
      <button className={upVoteClass} onClick={upVote}>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <div className="votes__number">{count}</div>
      <button className={downVoteClass} onClick={downVote}>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  );
};

export default Votes;
