import React from "react";
import ReactDOM from "react-dom";
import MyModal from "./MyModal";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <h1>Component Oriented Sass/Scss with React!</h1>
      <MyModal buttonLabel={`Open Modal (Base CSS)`} />
      <br />
      <MyModal className="darker" buttonLabel={`Open Modal (CSS Modifier: .darker)`} />
      <br />
      <MyModal className="no-header" buttonLabel={`Open Modal (CSS Modifier: .no-header)`} />
      <br />
      <MyModal className="fluid-width" buttonLabel={`Open Modal (CSS Modifier: .fluid-width)`} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
