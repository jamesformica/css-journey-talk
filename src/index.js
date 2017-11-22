import React from "react";
import ReactDOM from "react-dom";

import { objects } from "./objects";
import Title from "./components/Title/Title";
import Fullpage from "./components/Fullpage/Fullpage";
import Section from "./components/Section/Section";
import Slide from "./components/Slide/Slide";
import SnappyEditor from "./components/SnappyEditor/SnappyEditor";
import "./index.css";

const getEditorSlide = object => {
  return <SnappyEditor name={object.name} snippet={object.snippet} />;
};

const getTitleSlide = object => {
  return <Title name={object.name} />;
};

const slides = objects.map(object => {
  return (
    <Slide key={object.name}>
      {object.type === "Editor" && getEditorSlide(object)}
      {object.type === "Title" && getTitleSlide(object)}
    </Slide>
  );
});

ReactDOM.render(
  <Fullpage>
    <Section>{slides}</Section>
  </Fullpage>,
  document.getElementById("root")
);
