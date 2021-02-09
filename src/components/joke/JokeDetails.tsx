import React from "react";
import Moment from "react-moment";
import { FaPencilAlt, FaPlus, FaExternalLinkAlt } from "react-icons/fa";
interface Props {
  icon_url: string;
  url: string;
  created_at: string;
  updated_at: string;
}

const JokeDetails: React.FC<Props> = ({
  icon_url,
  url,
  created_at,
  updated_at
}): JSX.Element => (
  <div className="jokeDetailsContenair center">
    <img src={icon_url} alt="soure website icon" className="center" />

    <div className="jokedetailsStyles">
      <FaPlus /> Created at: <Moment format="YYYY/MM/DD">{created_at}</Moment>
      <br />
      <FaPencilAlt /> Updated at:{" "}
      <Moment format="YYYY/MM/DD">{updated_at}</Moment>
      <br />
      <FaExternalLinkAlt /> Visit the officiel website{" "}
      <a href={url} target="_blank" rel="noopener noreferrer">
        here
      </a>
    </div>
  </div>
);

export default JokeDetails;
