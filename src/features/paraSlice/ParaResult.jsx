import React, { useState, useMemo, useEffect } from "react";
import HightLight from "react-syntax-highlighter";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Modal from "../../components/utils/Modal";
import deriveStyles from "../../lib/deriveStyles";

const ParaResult = () => {
  const { styles } = useSelector((state) => state.para);
  const [isModalOpen, setModalOpen] = useState(false);
  const [fontLink, setFontLink] = useState("");
  const [currentFont, setCurrentFont] = useState("");

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const copyToClipboard = () => {
    toast.success("Copied to clipboard");
    navigator.clipboard.writeText(resultStyles);
    handleCloseModal();
  };

  const resultStyles = useMemo(() => {
    let derivedStyles = deriveStyles(styles);

    setCurrentFont(derivedStyles["font-family"]);

    if (derivedStyles["font-family"]) {
      derivedStyles[
        "font-family"
      ] = `"${derivedStyles["font-family"]}", sans-serif, serif`;
    }

    // turn the object key value pairs into a CSS ruleset
    let result = ".para {\n";
    for (let key in derivedStyles) {
      result += `    ${key}: ${derivedStyles[key]};\n`;
    }
    result += "}";
    return result;
  }, [styles]);

  useEffect(() => {
    let stylesElement = document.getElementById("para-generated-styles");
    stylesElement.innerHTML = resultStyles;
  }, [resultStyles]);

  useEffect(() => {
    const fontElement = document.getElementById("para-generated-font");
    let font = currentFont;
    if (font.split(" ").length > 1) {
      font = font.split(" ").join("+");
    }

    const link = `https://fonts.googleapis.com/css2?family=${font}:wght@300;400;700&display=swap`;
    fontElement.href = link;
    setFontLink(`<link ${link} rel="stylesheet"> `);
  }, [currentFont]);

  return (
    <>
      <div className="overlflow-auto mx-6">
        <div className="overflow-auto max-w-lg p-12 min-w-[400px] min-h-[250px] grid place-items-center bg-gray-100">
          <p className="para" contentEditable={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            suscipit, commodi dolores unde dolorem aspernatur nemo ad animi
            aliquam temporibus! Excepturi aliquam vitae maiores delectus
            aspernatur nesciunt impedi.
          </p>
        </div>
        <button
          onClick={handleOpenModal}
          className="absolute top-8 right-8 px-10 py-3 text-white font-bold rounded-md bg-blue-500"
        >
          Get CSS
        </button>
        <h2 className="absolute top-8 left-1/2 translate-x-8 font-bold  ">
          Paragraph Editor
        </h2>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal} className="w-[1000px]">
          <div className="grid-cols-2 grid">
            <div className="bg-[#011627] p-8">
              <HightLight language="html" wrapLongLines={true} style={nightOwl}>
                {`<!-- Include these in the head of your HTML to get access to your selected font -->`}
                {fontLink}
              </HightLight>
              <HightLight language="html" wrapLongLines={true} style={nightOwl}>
                {`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`}
              </HightLight>

              <HightLight language="html" wrapLongLines={true} style={nightOwl}>
                {`<link rel="preconnect" href="https://fonts.googleapis.com" />`}
              </HightLight>

              <HightLight language="html" wrapLongLines={true} style={nightOwl}>
                {fontLink}
              </HightLight>
            </div>
            <div className="bg-[#011627] p-8">
              <HightLight language="css" wrapLongLines={true} style={nightOwl}>
                {resultStyles}
              </HightLight>
            </div>
            <div></div>
            <button
              onClick={copyToClipboard}
              className="w-full bg-blue-500 py-3  mt-6 rounded text-white font-bold"
            >
              Copy CSS to clipboard
            </button>
          </div>
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

export default ParaResult;
