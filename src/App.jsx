import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeButtonStyles } from "./features/buttonSlice/buttonSlice";

const App = () => {
  const { styles } = useSelector((state) => state.button);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name: property, value } = e.target;
    dispatch(changeButtonStyles({ property, value }));
  };

  return (
    <div className="">
      <div className="">
        <div>paddingX {styles["paddingX"]}</div>
        <input
          type="range"
          value={styles["paddingX"]}
          name="paddingX"
          onChange={handleChange}
        />

        <div>paddingY {styles["paddingY"]}</div>
        <input
          type="range"
          value={styles["paddingY"]}
          name="paddingY"
          onChange={handleChange}
        />

        <div>background-color: {styles["background-color"]}</div>
        <input
          type="color"
          name="background-color"
          value={styles["background-color"]}
          onChange={handleChange}
        />

        <div>color: {styles.color}</div>
        <input
          type="color"
          name="color"
          value={styles["color"]}
          onChange={handleChange}
        />
      </div>
      <div className="mt-10">
        <pre>{JSON.stringify(styles, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
