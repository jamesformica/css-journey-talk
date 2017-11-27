import React from "react";

import styles from "./Slide.css";

const Slide = ({children}) => (
  <div className={`slide ${styles.slide}`}>{children}</div>
)

export default Slide;