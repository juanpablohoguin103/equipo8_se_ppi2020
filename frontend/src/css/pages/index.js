import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "../routes/App"
import Home from "../pages/home";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    < App/>
  </>,
  rootElement
);
