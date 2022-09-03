import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const ModalBackdrop = ({ onClose }) => {
  return <div onClick={onClose} className={styles.modal__backdrop}></div>;
};
const ModalContainer = ({ children }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(
        <ModalContainer onClose={onClose}>{children}</ModalContainer>,
        document.getElementById("modal-container"),
      )}
      {createPortal(
        <ModalBackdrop onClose={onClose} />,
        document.getElementById("modal-backdrop"),
      )}
    </>
  );
};

export default Modal;
