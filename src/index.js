import React from "react";
import ReactDOM from "react-dom";
import MyModal from "./MyModal";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.scss";

const CatCallingCard = ({width = 250, height = 250}) => (
  <div className='card mx-auto cat-box' style={{ width: (width + 50) }}>
    <h5 class="card-header text-left">
      Because every demo needs a cat photo
    </h5>
    <img className='card-img-bottom' src={`https://adorbs-as-a-service.herokuapp.com/api/v1/${width}w/${height}h/`} alt='necessary random pic of my kitty ♥️' />
  </div>
)

function App() {
  return (
    <div className="App">
      <h1>Component Oriented Sass in React!</h1>
      <p>
        <a href='https://github.com/justsml/react-sass-component-examples' target='_blank'>View project on GitHub</a>
        <br />
        This is a demo of <b>Component-oriented Sass</b>. We&apos;ll define & use some modifiers to affect how a Bootstrap Modal appears.
        <br />
        <b>List of Modal modifiers:</b> <i>.dark-mode</i>, <i>.no-header</i>, <i>.spaced-buttons</i> and <i>.fluid-width</i>.

      </p>
      <div className='row'>
        <div className='col-6'>
          <h3>Single Modifiers</h3>
          <MyModal buttonLabel={`Open Modal (Base CSS)`} />
          <br />
          <MyModal className="dark-mode" buttonLabel={`Open Modal (CSS Modifier: .dark-mode)`}><CatCallingCard /></MyModal>
          <br />
          <MyModal className="no-header" buttonLabel={`Open Modal (CSS Modifier: .no-header)`}><CatCallingCard /></MyModal>
          <br />
          <MyModal className="fluid-width" buttonLabel={`Open Modal (CSS Modifier: .fluid-width)`}><CatCallingCard width={550} height={375} /></MyModal>
        </div>
        <div className='col-6'>
          <h3>Combined Modifiers</h3>
          <MyModal className="dark-mode no-header" buttonLabel={`Open Modal (.no-header & .dark-mode)`} buttonColor='warning' />
          <br />
          <MyModal className="no-header spaced-buttons" buttonLabel={`Open Modal (.spaced-buttons & .no-header)`} buttonColor='warning' />
          <br />
          <MyModal className="spaced-buttons no-header fluid-width" buttonLabel={`.spaced-buttons, .no-header & .fluid-width`} buttonColor='warning' />
          <br />
          <MyModal className="dark-mode spaced-buttons fluid-width" buttonLabel={`.dark-mode, .spaced-buttons  & .fluid-width`} buttonColor='warning'>
            <CatCallingCard width={550} height={325} />
          </MyModal>
        </div>
      </div>


      <div className='row' style={{marginBottom: '100px'}}>
        <CatCallingCard width={410} height={360} />
      </div>

      <nav className='navbar fixed-bottom navbar-dark bg-dark text-white'>
        <label>Created By:&#160;<a className='text-white' title='visit my blog' href='https://danlevy.net/' target='_blank'>Dan Levy</a></label>
        <label>Tweet me:&#160;<a className='text-white' title='tweeter me' href='https://twitter.com/justsml' target='_blank'>@justsml</a></label>
      </nav>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
