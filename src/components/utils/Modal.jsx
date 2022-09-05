import React from "react";
import { createPortal } from "react-dom";

const ModalBackdrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed  h-screen w-screen bg-[#000c] top-0 left-0 z-20"
    ></div>
  );
};
const ModalContainer = ({ children, onClose }) => {
  return (
    <div className=" z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="max-w-2xl min-w-[500px] p-10 bg-white">{children}</div>
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(
        <ModalContainer onClose={onClose}>{children}</ModalContainer>,
        document.getElementById("modal-container")
      )}

      {createPortal(
        <ModalBackdrop onClose={onClose} />,
        document.getElementById("modal-backdrop")
      )}
    </>
  );
};

export default Modal;
