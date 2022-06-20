import React from "react";

function Score(props) {
    return (
      <div className="score-wrapper">
        <span>
          <div className="score-points">{props.roll}</div>
        </span>
      </div>
    );
  }

export default Score;