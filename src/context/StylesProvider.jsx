import React, { useEffect, useReducer, useState } from "react";
import StylesContext from "./StylesContext";

const StylesProvider = ({ children }) => {
  const [result, setResult] = useState("");

  const initialState = {};

  function btnReducer(state, action) {
    const { type } = action;
    const { name, value } = action.payload;

    if (type === "changeButtonStyles") {
    }
  }

  const [btnStyles, dispatch] = useReducer(btnReducer, initialState);

  const types = {
    number: ["padding-left", "padding-right", "padding-top", "padding-bottom"],
    string: ["color", "background-color"],
  };

  useEffect(() => {
    let stylesElement = document.getElementById("generated-styles");

    // turn the styles object into a styles string
    let styles = Object.entries(btnStyles).map((value) => {
      if (types.number.includes(`${value}`.split(",")[0])) {
        return `${`\n    ${value}`.split(",").join(": ")}px;`;
      } else {
        return `${`\n    ${value}`.split(",").join(": ")};`;
      }
    });
    styles = `.button {${styles.join(" ")}\n}`;
    setResult(styles);
    // change the styles in the DOM
    stylesElement.innerHTML = styles;
  }, [btnStyles]);

  return (
    <StylesContext.Provider value={{ btnStyles, dispatch, result }}>
      {children}
    </StylesContext.Provider>
  );
};
export default StylesProvider;
