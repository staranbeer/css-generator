import React, { useState, useMemo, useEffect } from 'react';
import HightLight from 'react-syntax-highlighter';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Modal from '../../components/utils/Modal';
import deriveStyles from '../../lib/deriveStyles';

function InputResult() {
  const { styles } = useSelector((state) => state.input);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const resultStyles = useMemo(() => {
    const derivedStyles = deriveStyles(styles);

    // turn the object key value pairs into a CSS ruleset
    let result = '.input {\n';
    for (const [key, value] of Object.entries(derivedStyles)) {
      result += `    ${key}: ${value};\n`;
    }
    result += '}';
    return result;
  }, [styles]);

  const copyToClipboard = () => {
    toast.success('Copied to clipboard');
    navigator.clipboard.writeText(resultStyles);
    handleCloseModal();
  };

  useEffect(() => {
    const stylesElement = document.getElementById('input-generated-styles');
    stylesElement.innerHTML = resultStyles;
  }, [resultStyles]);

  return (
    <>
      <div className="overlflow-auto mx-6">
        <div className="overflow-auto px-8 min-w-[400px] min-h-[300px] grid place-items-center bg-gray-100">
          <input
            placeholder="Style me!"
            className="input cursor-default outline-none "
          />
        </div>
        <button
          type="button"
          onClick={handleOpenModal}
          className="absolute top-8 right-8 px-10 py-3 text-white font-bold rounded-md bg-blue-500"
        >
          Get CSS
        </button>
        <h2 className="absolute top-8 left-1/2 translate-x-8 font-bold  ">
          Input Editor
        </h2>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="bg-[#011627] p-8">
            <HightLight language="css" wrapLongLines style={nightOwl}>
              {resultStyles}
            </HightLight>
          </div>
          <button
            type="button"
            onClick={copyToClipboard}
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

export default InputResult;
