import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import deriveStyles from "../../lib/deriveStyles";

const ButtonResult = () => {
  const { styles } = useSelector((state) => state.button);
  const resultStyles = useMemo(() => {
    let derivedStyles = deriveStyles(styles);

    // turn the object key value pairs into a CSS ruleset
    let result = ".button {\n";
    for (let key in derivedStyles) {
      result += `    ${key}: ${derivedStyles[key]};\n`;
    }
    result += "}";
    return result;
  }, [styles]);

  useEffect(() => {
    let stylesElement = document.getElementById("generated-styles");
    stylesElement.innerHTML = resultStyles;
  }, [styles]);

  return (
    <>
      <button className="button">style Me!</button>
      {/* <pre>{resultStyles}</pre> */}
    </>
  );
};

export default ButtonResult;
