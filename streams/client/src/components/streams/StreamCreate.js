import React from "react";
import { connect } from "react-redux";
import StreamFrom from "./StreamForm";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
    console.log(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamFrom onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
