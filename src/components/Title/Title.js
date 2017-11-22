import React from "react";
import styles from "./Title.css";

const Title = ({ name }) => <h1 className={styles.title}>[{name}]</h1>;

export default Title;
