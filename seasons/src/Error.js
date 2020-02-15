import React from "react";

const Error = props => {
  return (
    <div>
      <h1>Uh oh... something went wrong</h1>
      <br />
      {props.errMsg}
    </div>
  );
};

export default Error;
