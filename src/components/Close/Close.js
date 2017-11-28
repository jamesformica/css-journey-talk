import React from 'react';

import styles from './Close.css';

const Close = () => (
  <div className={styles.bg}>
    <h1 className={styles.thanks}>Thank you!</h1>

    <div className={styles.slothContainer}>
      <div className={styles.slothHead}>
        <div className={styles.slothFace}>
          <div className={`${styles.slothEyeContainer} ${styles.slothEyeContainerOne}`}>
            <div className={styles.slothEye} />
          </div>

          <div className={`${styles.slothEyeContainer} ${styles.slothEyeContainerTwo}`}>
          <div className={styles.slothEye} />
          </div>

          <div className={styles.slothNose} />

          <div className={styles.slothMouth} />
        </div>
      </div>
    </div>
  </div>
);

export default Close;
