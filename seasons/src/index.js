import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import Error from "./Error";

class App extends React.Component {
  state = { lat: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMsg: err.message })
    );
  }

  renderCondition() {
    if (this.state.errMsg && !this.state.lat) {
      return <Error errMsg={this.state.errMsg} />;
    } else if (!this.state.errMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Loader message="Fetching location data..." />;
    }
  }

  render() {
    return <div>{this.renderCondition()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
