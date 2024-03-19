import React from "react";
import ReactDOM from "react-dom";
import Header from './modules/Header';
import Footer from './modules/Footer';

import "./index.css";

const App = () => (
  <div className="container">
    <Header/>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
