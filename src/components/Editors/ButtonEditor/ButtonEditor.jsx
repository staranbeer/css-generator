import React, { useContext } from "react";
import StylesContext from "../../../context/StylesContext";
import styles from "./ButtonEditor.module.css";

const ButtonEditor = () => {
  const { btnStyles, actions } = useContext(StylesContext);

  const changeText = (e) => {
    actions.changeButtonText(e.target.value);
  };
  return (
    <div>
      <input
        value={btnStyles.btnText}
        onChange={(e) => changeText(e)}
        className={styles.input}
      />
    </div>
  );
};

export default ButtonEditor;
