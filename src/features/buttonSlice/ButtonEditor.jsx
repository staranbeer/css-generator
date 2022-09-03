import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../components/utils/Menu";
import { changeButtonStyles } from "./buttonSlice";

const ButtonEditor = () => {
  const { styles } = useSelector((state) => state.button);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name: property, value } = e.target;
    dispatch(changeButtonStyles({ property, value }));
  };

  return (
    <div className="w-full flex flex-col gap-4 ">
      <Menu title="Padding">
        <div>
          <label htmlFor="paddingX">paddingX {styles["paddingX"]}</label>
          <input
            type="range"
            value={styles["paddingX"]}
            name="paddingX"
            id="paddingX"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="paddingY">paddingY {styles["paddingY"]}</label>
          <input
            type="range"
            value={styles["paddingY"]}
            id="paddingY"
            name="paddingY"
            onChange={handleChange}
          />
        </div>
      </Menu>

      <Menu title={"colors"}>
        <div>
          <label htmlFor="color">color: {styles.color}</label>
          <input
            type="color"
            id="color"
            name="color"
            value={styles["color"]}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="background-color">
            background-color: {styles["background-color"]}
          </label>
          <input
            id="background-color"
            type="color"
            name="background-color"
            value={styles["background-color"]}
            onChange={handleChange}
          />
        </div>
      </Menu>
    </div>
  );
};

export default ButtonEditor;
