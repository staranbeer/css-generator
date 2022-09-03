import React, { useContext } from "react";
import StylesContext from "../../../context/StylesContext";
import styles from "./ButtonEditor.module.css";

const ButtonEditor = () => {
  const { btnStyles, dispatch } = useContext(StylesContext);
  function handleChange(name, value) {
    dispatch({
      type: "changeButtonStyles",
      payload: { name, value },
    });
    console.log(value);
  }
  return (
    <div className={styles.button__controls}>
      <div className={styles.button__control}>
        <label htmlFor="paddingX">Padding X</label>
        <input
          id="paddingX"
          type="range"
          name="paddingX"
          onChange={(e) => {
            handleChange(e.target.name, e.target.value);
          }}
          value={btnStyles["padding-left"]}
        />
      </div>
      <div className={styles.button__control}>
        <label htmlFor="paddingY">Padding Y</label>
        <input
          id="paddingY"
          type="range"
          name="paddingY"
          onChange={(e) => {
            handleChange(e.target.name, e.target.value);
          }}
          value={btnStyles["padding-top"]}
        />
      </div>
      <div className={styles.button__control}>
        <label htmlFor="background-color">background color</label>
        <input
          id="background-color"
          type="color"
          name="background-color"
          onChange={(e) => {
            handleChange(e.target.name, e.target.value);
          }}
          value={btnStyles["background-color"]}
        />
      </div>
      <div className={styles.button__control}>
        <label htmlFor="color">color</label>
        <input
          id="color"
          type="color"
          name="color"
          onChange={(e) => {
            handleChange(e.target.name, e.target.value);
          }}
          value={btnStyles["color"]}
        />
      </div>
    </div>
  );
};

export default ButtonEditor;
