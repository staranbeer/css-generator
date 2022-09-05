import React, { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import HightLight from "react-syntax-highlighter";
import { toast, ToastContainer } from "react-toastify";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "react-toastify/dist/ReactToastify.css";

import Modal from "../../components/utils/Modal";
import deriveStyles from "../../lib/deriveStyles";

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

    // turn the object key value pairs into a CSS rule
    let result = ".button {\n";
    for (let key in derivedStyles) {
      result += `    ${key}: ${derivedStyles[key]};\n`;
    }
    result += "}";
    return result;
  }, [styles]);

  useEffect(() => {
    // stick the styles into the head element.
    let stylesElement = document.getElementById("button-generated-styles");
    stylesElement.innerHTML = resultStyles;
  }, [resultStyles]);

  return (
    <>
      <div className="">
        <div className="p-12 bg-gray-100">
          <button className="button">style Me!</button>
        </div>
        <button
          onClick={handleOpenModal}
          className="absolute top-8 right-8 px-10 py-3 text-white font-bold rounded-md bg-blue-500"
        >
          Get CSS
        </button>
        <h2 className="absolute top-8 left-1/2 translate-x-8 font-bold  ">
          Button Editor
        </h2>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="bg-[#011627] p-8">
            <HightLight wrapLongLines={true} language="css" style={nightOwl}>
              {resultStyles}
            </HightLight>
          </div>
          <button
            onClick={() => {
              toast.success("Copied to clipboard");
              navigator.clipboard.writeText(resultStyles);
              handleCloseModal();
            }}
            className="w-full bg-blue-500 py-3  mt-6 rounded text-white font-bold"
          >
            Copy to clipboard
          </button>
        </Modal>
      )}

      {createPortal(
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={true}
        />,
        document.getElementById("toast")
      )}
    </>
  );
};

export default ButtonResult;
