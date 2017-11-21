import React from "react";

import styles from "./DopePreview.css";

const DopePreview = ({ css, objectClassNames }) => {
  return (
    <div className={styles.preview}>
      <style>{css}</style>
      {objectClassNames && objectClassNames.map(c => (
        <div key={c} className={`${styles.object} ${c}`} />
      ))}
    </div>
  );
};

export default DopePreview;
