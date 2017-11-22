import React, { Component } from "react";

import styles from "./DopePreview.css";

class DopePreview extends Component {
  constructor() {
    super();

    this.renderTopLevelElements = this.renderTopLevelElements.bind(this);
    this.renderChildrenElements = this.renderChildrenElements.bind(this);
    this.findChildren = this.findChildren.bind(this);
  }

  renderTopLevelElements = () => {
    const results = [];
    while (this.classNamesArray.length > 0) {
      // just pull off the first one until there are none left
      const c = this.classNamesArray[0];
      // remove the 'processed' classname
      this.classNamesArray.splice(0, 1);

      results.push(
        <div key={c} className={styles.object + " " + c}>
          {this.renderChildrenElements(c)}
        </div>
      );
    }

    return results;
  };

  renderChildrenElements = className => {
    const results = [];
    const children = this.findChildren(className);

    for (let i = 0; i < children.length; i++) {
      const c = children[i];
      const index = this.classNamesArray.findIndex(p => p === c);

      // if we have already processed this child then skip
      if (index === -1) continue;

      this.classNamesArray.splice(index, 1);
      results.push(
        <div key={c} className={`${styles.object} ${c}`}>
          {this.renderChildrenElements(c)}
        </div>
      );
    }

    return results;
  };

  findChildren = className => {
    return this.classNamesArray.filter(c => c.indexOf(className) >= 0);
  };

  render() {
    this.classNamesArray = [];
    if (this.props.objectClassNames)
      this.classNamesArray = [...this.props.objectClassNames];

    return (
      <div className={styles.preview}>
        <style>{this.props.css}</style>
        {this.props.objectClassNames && this.renderTopLevelElements()}
      </div>
    );
  }
}

export default DopePreview;
