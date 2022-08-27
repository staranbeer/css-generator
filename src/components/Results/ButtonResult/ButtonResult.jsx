import React, { useContext } from "react";
import StylesContext from "../../../context/StylesContext";

const ButtonResult = ({}) => {
  const { btnStyles } = useContext(StylesContext);

  return <button style={btnStyles}>Style Me</button>;
};

export default ButtonResult;
