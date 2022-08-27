import styles from "./Result.module.css";
import React from "react";
import ButtonResult from "../ButtonResult/ButtonResult";

export const Result = () => {
  return (
    <div className={styles.results}>
      <ButtonResult />
    </div>
  );
};
