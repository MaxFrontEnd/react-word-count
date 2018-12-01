import React from "react";
import { render } from "react-dom";
import TextArea from "./TextArea";
import Timer from "./Timer";

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <div id="main">
          <TextArea />
        </div>
        <div id="timer">
          <Timer start={Date.now()} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
