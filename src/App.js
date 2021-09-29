import React from "react";

import Greeting from "./Greeting";

import "./App.css";

function App() {
  const h1 = React.createElement(
    "h1",
    {
      className: "example-class",
    },
    "React.createElement example"
  );

  const myText = "Demo Text";

  return (
    <div className="App">
      <header className="App-header">
        <h1>{myText}</h1>
        {h1}
        <Greeting />
      </header>
    </div>
  );
}

export default App;
