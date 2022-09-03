import styles from "./Result.module.css";
import React, { useContext, useState } from "react";
import ButtonResult from "../ButtonResult/ButtonResult";
import Modal from "../../utils/Modal/Modal";
import StylesContext from "../../../context/StylesContext";

export const Result = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { result } = useContext(StylesContext);

  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.results}>
      <div>
        <ButtonResult />
        <button
          className={styles.result__toggle}
          onClick={() => setIsModalOpen((i) => !i)}
        >
          Open Modal
        </button>
      </div>
      {isModalOpen && (
        <Modal onClose={handleClose}>
          <pre>{result}</pre>
        </Modal>
      )}
    </div>
  );
};
