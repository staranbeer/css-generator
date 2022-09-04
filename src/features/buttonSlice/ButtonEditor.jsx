import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../components/utils/Menu";
import { changeButtonStyles } from "./buttonSlice";

const ButtonEditor = () => {
  const { styles } = useSelector((state) => state.button);
  const [activeMenu, setActiveMenu] = useState("Text");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name: property, value } = e.target;
    dispatch(changeButtonStyles({ property, value }));
  };

  return (
    <div className="w-full flex flex-col gap-2 ">
      <Menu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        title={"Text"}
      >
        <div className="">
          <label htmlFor="font-weight">
            font-weight {styles["font-weight"]}
          </label>
          <select name="font-weight" id="font-weight" onChange={handleChange}>
            <option value="400">normal</option>
            <option value="300">light</option>
            <option value="700">bold</option>
          </select>
        </div>

        <div className="">
          <label htmlFor="font-size">font-size {styles["font-size"]}</label>
          <select
            name="font-size"
            value={styles["font-size"]}
            id="font-size"
            onChange={handleChange}
          >
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="32">32</option>
            <option value="40">40</option>
            <option value="48">48</option>
          </select>
        </div>
      </Menu>

      <Menu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        title={"Padding"}
      >
        <div className="">
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
      <Menu
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
        title={"Colors"}
      >
        <div className="">
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
      <Menu
        setActiveMenu={setActiveMenu}
        activeMenu={activeMenu}
        title={"Border"}
      >
        <div className="">
          <label htmlFor="border-color">
            border-color: {styles["border-color"]}
          </label>
          <input
            type="color"
            id="border-color"
            name="border-color"
            value={styles["border-color"]}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="border-width">
            border-width: {styles["border-width"]}
          </label>
          <input
            id="border-width"
            type="range"
            max="10"
            name="border-width"
            value={styles["border-width"]}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="border-type">
            border-type: {styles["border-type"]}
          </label>
          <select name="border-type" onChange={handleChange} id="border-type">
            <option value="solid">Solid</option>
            <option value="dotted">Dotted</option>
            <option value="dashed">Dashed</option>
          </select>
        </div>
        <div>
          <label htmlFor="border-radius">
            border-radius: {styles["border-radius"]}
          </label>
          <input
            id="border-radius"
            type="range"
            max="60"
            name="border-radius"
            value={styles["border-radius"]}
            onChange={handleChange}
          />
        </div>
      </Menu>
    </div>
  );
};

export default ButtonEditor;
