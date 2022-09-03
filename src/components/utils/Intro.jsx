import React from "react";
import Modal from "./Modal/Modal";

const Intro = ({ onClose, children }) => {
  return <Modal onClose={onClose}>{children}</Modal>;
};

export default Intro;
