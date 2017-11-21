import React from "react";
import ReactDOM from "react-dom";

import { objects } from "./objects";
import Fullpage from "./components/Fullpage/Fullpage";
import Section from "./components/Section/Section";
import Slide from "./components/Slide/Slide";
import SnappyEditor from "./components/SnappyEditor/SnappyEditor";
import "./index.css";

const slides = objects.map(object => (
  <Slide key={object.name}>
    <SnappyEditor name={object.name} snippet={object.snippet} />
  </Slide>
));

ReactDOM.render(
  <Fullpage>
    <Section>{slides}</Section>
  </Fullpage>,
  document.getElementById("root")
);
