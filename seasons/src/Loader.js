import React from "react";

const Loader = props => {
  return (
    <div className="ui active dimmer">
      <i className="inverted huge loading compass icon" />
      <br />
      <div style={{ color: "white" }}>{props.message}</div>
    </div>
  );
};

Loader.defaultProps = {
  message: "Loading..."
};

export default Loader;
