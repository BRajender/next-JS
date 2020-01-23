import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }
  changeProgress() {
    this.setState({
      progress: this.state.progress + 20
    });
  }

  render() {
    console.log("render in progress");
    return (
      <div>
        <ProgressBar
          animated
          variant="success"
          now={this.state.progress}
          label={`${this.state.progress}%`}
        />
        <div className="row">
          <button
            type="button"
            className="next-btn"
            onClick={() => this.changeProgress()}
          >
            next
          </button>
        </div>
      </div>
    );
  }
}

export default Progress;
