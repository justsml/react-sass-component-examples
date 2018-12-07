import React from "react";
import ReactDOM from "react-dom";
import MyModal from "./MyModal";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <h1>Component Oriented Sass in React!</h1>
      <p>
        <a href='https://github.com/justsml/react-sass-component-examples' target='_blank'>View project on GitHub</a>
        <br />
        This is a demo of Component-oriented Sass. We will define & use some modifiers to affect how a Bootstrap Modal appears.
        <br />
        <b>List of Modal modifiers:</b> <i>.dark-mode</i>, <i>.no-header</i>, <i>.spaced-buttons</i> and <i>.fluid-width</i>.

      </p>
      <div className='row'>
        <div className='col-6'>
          <h3>Single Modifiers</h3>
          <MyModal buttonLabel={`Open Modal (Base CSS)`} />
          <br />
          <MyModal className="dark-mode" buttonLabel={`Open Modal (CSS Modifier: .dark-mode)`} />
          <br />
          <MyModal className="no-header" buttonLabel={`Open Modal (CSS Modifier: .no-header)`} />
          <br />
          <MyModal className="fluid-width" buttonLabel={`Open Modal (CSS Modifier: .fluid-width)`} />
        </div>
        <div className='col-6'>
          <h3>Combined Modifiers</h3>
          <MyModal className="dark-mode no-header" buttonLabel={`Open Modal (.no-header & .dark-mode)`} buttonColor='warning' />
          <br />
          <MyModal className="no-header spaced-buttons" buttonLabel={`Open Modal (.spaced-buttons & .no-header)`} buttonColor='warning' />
          <br />
          <MyModal className="spaced-buttons no-header fluid-width" buttonLabel={`.spaced-buttons, .no-header & .fluid-width`} buttonColor='warning' />
        </div>
      </div>
      <nav className='navbar fixed-bottom navbar-dark bg-dark text-white'>
        By: <a className='text-white' href='https://danlevy.net/' target='_blank'>Dan Levy</a>
      </nav>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
