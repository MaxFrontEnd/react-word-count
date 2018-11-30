import React from "react";
import { render } from "react-dom";
import TextArea from "./TextArea";

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <TextArea />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
