import React, { Component } from "react";

import DopePreview from "../DopePreview/DopePreview";
import TextEditor from "../TextEditor/TextEditor";
import styles from "./SnappyEditor.css";

class SnappyEditor extends Component {
  constructor() {
    super();
    this.state = {
      css: "still loading"
    };
  }

  componentWillMount() {
    this.getFile(this.props.snippet, text => {
      this.setState({
        css: text,
        objectClassNames: this.getObjectClassNames(text)
      });
    });
  }

  getFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          callback(rawFile.responseText.trim());
        }
      }
    };
    rawFile.send(null);
  }

  getObjectClassNames(text) {
    const classes = [];
    let nextIndex = text.indexOf(".", 0);
    let bracketIndex = text.indexOf("{", nextIndex);

    while(nextIndex >= 0 && bracketIndex >= 0) {
      classes.push(text.substring(nextIndex + 1, bracketIndex).trim());

      // grab the closing bracket so we skip anything that might have a '.' in
      // it such as an image extension or opacity
      const closingIndex = text.indexOf("}", bracketIndex);

      nextIndex = text.indexOf(".", closingIndex);
      bracketIndex = text.indexOf("{", nextIndex);
    }

    return classes;
  }

  textareaChange(text) {
    this.setState({
      css: text
    });
  }

  render() {
    return (
      <div className={styles.editor}>
        <span className={styles.name}>{this.props.name}</span>
        <TextEditor
          css={this.state.css}
          textareaChange={this.textareaChange.bind(this)}
        />
        <DopePreview
          objectClassNames={this.state.objectClassNames}
          css={this.state.css}
        />
      </div>
    );
  }
}

export default SnappyEditor;
