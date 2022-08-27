import React, { useState } from "react";
import StylesContext from "./StylesContext";

const StylesProvider = ({ children }) => {
  const [btnStyles, setBtnStyles] = useState({
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "16px",
    fontWeight: "500",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#000",
    borderRadius: "2px",
    paddingLeft: "8px",
    paddingRight: "8px",
    paddingTop: "3px",
    paddingBottom: "3px",
  });

  const userString = `
  background-color: ${btnStyles.backgroundColor};
  color: ${btnStyles.color};
  font-size: ${btnStyles.fontSize};
  font-weight: ${btnStyles.fontWeight};
  border: ${btnStyles.borderWidth} ${btnStyles.borderStyle} ${btnStyles.borderColor};
  border-radius: ${btnStyles.borderRadius};
  padding: ${btnStyles.paddingTop} ${btnStyles.paddingRight} ${btnStyles.paddingBottom} ${btnStyles.paddingLeft};
  `;

  const actions = {
    changeButtonText: () => {},
  };
  return (
    <StylesContext.Provider value={{ btnStyles, userString, actions }}>
      {children}
    </StylesContext.Provider>
  );
};
export default StylesProvider;
