import React from "react";

import Greeting from "./components/Greeting";
import { User } from "./components/User";
import { currentUser } from "./helpers/user";

import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="box">
        <Greeting />
        <User user={currentUser} title="User Component title" bio />
        <User title="" />
      </header>
    </div>
  );
}

export default App;
