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

  /**
   * Makes an Http GET request to the location of the file then calls
   * the callback function passing through the contents of the file.
   * @param {string} file the public url of a file to retrieve
   * @param {*} callback a function to call when the request is done
   */
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

  /**
   * Traverses the CSS file looking for classes and returns back an
   * array of valid classes. A valid class has a length > 0 and does
   * not have a colon (':') in it as we do not want to render pseudo
   * classes.
   * @param {string} text the css file to find classes in
   */
  getObjectClassNames(text) {
    const classes = [];
    let nextClass = this.findNextClass(text, 0);

    while (nextClass.dot >= 0 && nextClass.bracket >= 0) {
      const potentialClass = text.substring(nextClass.dot + 1, nextClass.bracket).trim();

      // we dont want emprty classes or ones with a colon such as .example:hover
      if (potentialClass.length > 0 && potentialClass.indexOf(":") === -1) {
        classes.push(potentialClass);
      }

      nextClass = this.findNextClass(text, nextClass.bracket);
    }

    return classes;
  }

  /**
   * Tries to find the next CSS class by searching for a '.' followed
   * by an '{' which is the start of a class declaration. If it finds
   * a '}' before a '{' this means it is invalid and looks for the
   * next '.' recursively.
   * @param {string} text the text to search for the next class
   * @param {number} index the index to start looking for a class
   */
  findNextClass(text, index) {
    let dot = text.indexOf(".", index);
    let i = dot;

    if (dot === -1) return -1;

    while(true) {
      const char = text[++i];
      if (char === '{') return { dot: dot, bracket: i };
      if (char === '}') return this.findNextClass(text, i);
    }
  }

  textareaChange(text) {
    this.setState({
      css: text
    });
  }

  render() {
    return (
      <div>
      <span className={styles.bigname}>{this.props.name}</span>
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
      </div>
    );
  }
}

export default SnappyEditor;
