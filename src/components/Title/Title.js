import React from "react";
import styles from "./Title.css";

const getBackgroundStyle = (primary, secondary) => {
  return {
    background: `repeating-linear-gradient(
      -45deg, ${primary}, ${primary} 10px,
      ${secondary} 10px, ${secondary} 20px)`
  };
};

const Title = ({ name, primary, secondary }) => (
  <div className={styles.bg} style={getBackgroundStyle(primary, secondary)}>
    <h1 className={styles.title}>[{name}]</h1>
  </div>
);

export default Title;
