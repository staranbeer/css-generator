import React from "react";
import styles from "./Editor.module.css";
import ButtonEditor from "../ButtonEditor/ButtonEditor";

const Editor = () => {
  return (
    <div className={styles.editor}>
      <h2 className={styles.editor__h2}>
        Use the controls below to style your component!{" "}
      </h2>
      <ButtonEditor />
    </div>
  );
};

export default Editor;
