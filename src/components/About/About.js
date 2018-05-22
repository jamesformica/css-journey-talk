import React from 'react';

import me from "./james_rea.jpg";
import spacely from "./spacely_logo.jpg"
import styles from "./About.css";

const About = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.circle} style={{ backgroundImage: `url('${me}')` }} />
    <div className={styles.square}>
      <p>James Formica</p>
      <p>UI Developer</p>
      <img className={styles.logo} src={spacely} alt="spacely" />
    </div>
  </div>
);

export default About;