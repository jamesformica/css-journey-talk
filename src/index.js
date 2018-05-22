import React from "react";
import ReactDOM from "react-dom";

import { objects } from "./objects";
import About from "./components/About/About";
import Close from "./components/Close/Close";
import Fullpage from "./components/Fullpage/Fullpage";
import Section from "./components/Section/Section";
import Slide from "./components/Slide/Slide";
import SnappyEditor from "./components/SnappyEditor/SnappyEditor";
import Title from "./components/Title/Title";
import "./index.css";

const getEditorSlide = object => {
  return <SnappyEditor name={object.name} snippet={object.snippet} solution={object.solution} />;
};

const getTitleSlide = object => {
  return <Title name={object.name} primary={object.primary} secondary={object.secondary} />;
};

const slides = objects.map((object, index) => {
  return (
    <Slide key={object.name}>
      {object.type === "Editor" && getEditorSlide(object)}
      {object.type === "Title" && getTitleSlide(object)}
      {object.type === "About" && <About />}
      {object.type === "Close" && <Close />}
    </Slide>
  )
})

ReactDOM.render(
  <Fullpage>
    <Section>
      {slides}
    </Section>
  </Fullpage>,
  document.getElementById("root")
);

// prevent pressing Tab, it stuffs up FullPageJs
document.body.onkeydown = (e) => {
  if (e.which === 9 || e.code === 'Tab') {
    e.preventDefault();
  }
}
