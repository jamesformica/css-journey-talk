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
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", this.props.snippet, true);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          const text = rawFile.responseText.trim();
          this.setState(
            {
              css: text,
              objectClassNames: this.getObjectClassNames(text)
            });
        }
      }
    };
    rawFile.send(null);
  }

  getObjectClassNames(text) {
    const classes = text.split(".");
    return classes.map(s => {
      return s.substring(0, s.indexOf(" "));
    }).filter(c => c.length > 0);
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
