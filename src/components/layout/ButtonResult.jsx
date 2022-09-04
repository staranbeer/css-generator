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
  }, [resultStyles]);

  return (
    <div className="">
      <button className="button  ">style Me!</button>
      <button className="absolute top-4 right-4 px-10 py-3 text-white font-bold rounded-md bg-blue-500">
        Get CSS
      </button>
    </div>
  );
};

export default ButtonResult;
