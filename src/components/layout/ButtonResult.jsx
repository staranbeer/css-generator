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
      <div className="">
        <button className="button  ">style Me!</button>
        <button className="absolute px-12 top-10 right-0  bg-blue-500 mt-10 text-center py-3 rounded-md font-bold text-white">
          Get CSS
        </button>
      </div>
      {/* <pre>{resultStyles}</pre> */}
    </>
  );
};

export default ButtonResult;
