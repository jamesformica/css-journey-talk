import React, { Component } from "react";

import styles from "./TextEditor.css";

class TextEditor extends Component {
  textareaChange() {
    this.props.textareaChange(this.textarea.value);
  }

  indentOnEnter(e) {
    if (e.keyCode === 13) {
      const cursorPos = this.textarea.selectionStart;
      const beforeEnter = this.textarea.value.substring(0, cursorPos);
      const afterEnter = this.textarea.value.substring(cursorPos);
      const indentedText = `${beforeEnter}  ${afterEnter}`;

      this.textarea.value = indentedText;

      const newCursorPos = cursorPos + 2;
      this.textarea.setSelectionRange(newCursorPos, newCursorPos);
    }
  }

  render() {
    return (
      <textarea
        className={styles.textarea}
        value={this.props.css}
        onChange={this.textareaChange.bind(this)}
        onKeyUpCapture={this.indentOnEnter.bind(this)}
        ref={ta => (this.textarea = ta)}
      />
    );
  }
}

export default TextEditor;
