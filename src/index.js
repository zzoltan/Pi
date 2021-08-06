import React from "react";
import React_DOM from "react-dom";
import Pi, { doublePi, triplePi } from "./maths";

React_DOM.render(
  <div>
    <h1>Hello world</h1>
    <ul>
      <li>{Pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
