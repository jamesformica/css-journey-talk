import React from "react";
import ReactDOM from "react-dom";

import { objects } from "./objects";
import Title from "./components/Title/Title";
import Fullpage from "./components/Fullpage/Fullpage";
import Section from "./components/Section/Section";
import Slide from "./components/Slide/Slide";
import About from "./components/About/About";
import SnappyEditor from "./components/SnappyEditor/SnappyEditor";
import "./index.css";

const getEditorSlide = object => {
  return <SnappyEditor name={object.name} snippet={object.snippet} />;
};

const getTitleSlide = object => {
  return <Title name={object.name} primary={object.primary} secondary={object.secondary} />;
};

const getAboutSlide = () => {
  return <About />;
};

const slides = objects.map(object => {
  return (
    <Slide key={object.name}>
      {object.type === "Editor" && getEditorSlide(object)}
      {object.type === "Title" && getTitleSlide(object)}
      {object.type === "About" && getAboutSlide()}
    </Slide>
  );
});



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
