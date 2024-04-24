import React from "react";
import LoginForm from "./LoginForm"; // This imports the LoginForm from another file.
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="app-container">
      <div className="background-image"></div>
      <div className="blur-layer"></div>
      <LoginForm className="login-form" />
    </div>
  );
}

export default App;
