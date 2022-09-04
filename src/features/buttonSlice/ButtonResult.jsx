import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "../../components/utils/Modal";
import deriveStyles from "../../lib/deriveStyles";
import HightLight from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ButtonResult = () => {
  const { styles } = useSelector((state) => state.button);
  const [isModalOpen, setModalOpen] = useState(false);

  function handleCloseModal() {
    setModalOpen(false);
  }

  function handleOpenModal() {
    setModalOpen(true);
  }

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
    <>
      <div className="">
        <button className="button">style Me!</button>
        <button
          onClick={handleOpenModal}
          className="absolute top-8 right-8 px-10 py-3 text-white font-bold rounded-md bg-blue-500"
        >
          Get CSS
        </button>
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="bg-[#011627] p-8">
            <HightLight style={nightOwl}>{resultStyles}</HightLight>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(resultStyles);
              handleCloseModal();
            }}
            className="w-full bg-blue-500 py-3  mt-6 rounded text-white font-bold"
          >
            Copy to clipboard
          </button>
        </Modal>
      )}
    </>
  );
};

export default ButtonResult;
