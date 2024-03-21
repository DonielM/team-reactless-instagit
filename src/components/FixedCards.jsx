import React from "react";
import "../styles/FixedCards.css";

function FixedCards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="img" alt={ props.username } src={ props.Pic} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Username:</strong> { props.Username }
          </li>
          <li>
            <a href={ props.NoofREPO}><strong>No of Repo:</strong> </a>
          </li>
          <li>
              <a href={ props.GitHubRepo }><strong>GitHub Repo</strong></a>
          </li>
          <li>
              <a href={ props.Pic }><strong>Screenshot</strong></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FixedCards;