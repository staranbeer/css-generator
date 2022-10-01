import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import HightLight from 'react-syntax-highlighter';
import { toast, ToastContainer } from 'react-toastify';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import 'react-toastify/dist/ReactToastify.css';

import Modal from '../../components/utils/Modal';
import deriveStyles from '../../lib/deriveStyles';

function ButtonResult() {
  const { styles } = useSelector((state) => state.button);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const resultStyles = useMemo(() => {
    const derivedStyles = deriveStyles(styles);

    // turn the object key value pairs into a CSS rule
    let result = '.button {\n';
    for (const [key, value] of Object.entries(derivedStyles)) {
      result += `    ${key}: ${value};\n`;
    }
    result += '}';
    return result;
  }, [styles]);

  useEffect(() => {
    // stick the styles into the head element.
    const stylesElement = document.getElementById('button-generated-styles');
    stylesElement.innerHTML = resultStyles;
  }, [resultStyles]);

  return (
    <>
      <div className="overflow-auto">
        <div className="min-w-[400px] min-h-[300px] grid place-items-center bg-gray-100">
          <button className="button" type="button">style Me!</button>
        </div>
        <button
          type="button"
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
            <HightLight wrapLongLines language="css" style={nightOwl}>
              {resultStyles}
            </HightLight>
          </div>
          <button
            type="button"
            onClick={() => {
              toast.success('Copied to clipboard');
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
          hideProgressBar
          newestOnTop={false}
          closeOnClick
        />,
        document.getElementById('toast'),
      )}
    </>
  );
}

export default ButtonResult;
