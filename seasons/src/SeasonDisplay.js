import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    content: `Let's hit the beach!`,
    iconType: `sun`
  },
  winter: {
    content: `Burr... It's chilly`,
    iconType: `snowflake`
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { content, iconType } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconType} icon`} />
      <h1>{content}</h1>
      <i className={`icon-right massive ${iconType} icon`} />
    </div>
  );
};

export default SeasonDisplay;
