import React from 'react';

import styles from "./About.css";

const About = () => (
  <div className={styles.wrapper}>
    <div className={styles.circle} />
    <div className={styles.square}>
      <p>James Formica</p>
      <p>Frontend/UI Developer</p>
      <p>REA-Group</p>
    </div>
  </div>
);

export default About;