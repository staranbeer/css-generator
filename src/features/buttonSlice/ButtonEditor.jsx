import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeButtonStyles } from "./buttonSlice";

import Menu, { MenuItem } from "../../components/utils/Menu";
import ButtonResult from "./ButtonResult";

const ButtonEditor = () => {
  const { styles } = useSelector((state) => state.button);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name: property, value } = e.target;
    dispatch(changeButtonStyles({ property, value }));
  };

  return (
    <>
      <div className=" px-10 pt-8 border-r-2 w-full  mx-auto overflow-auto ">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-medium">
            Use the controls below to style the component on your right.
          </h2>
          <p className="mt-3 text-gray-700">
            Click on "Get CSS" when you're done.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12 space-y-3">
          {/* text */}

          <Menu isActive={true} title={"Text"}>
            <MenuItem
              label={"font-weight"}
              name="font weight"
              value={styles["font-weight"] || 400}
            >
              <select
                name="font-weight"
                id="font-weight"
                onChange={handleChange}
              >
                <option value="400">normal</option>
                <option value="300">light</option>
                <option value="700">bold</option>
              </select>
            </MenuItem>

            <MenuItem
              label={"font-size"}
              name="font size"
              value={styles["font-size"]}
            >
              <select name="font-size" id="font-size" onChange={handleChange}>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="20">20</option>
                <option value="24">24</option>
                <option value="32">32</option>
                <option value="40">40</option>
                <option value="48">48</option>
              </select>
            </MenuItem>
          </Menu>

          {/* padding */}

          <Menu title={"Padding"}>
            <MenuItem
              name={"paddingX"}
              label="paddingX"
              value={styles["paddingX"]}
            >
              <input
                type="range"
                value={styles["paddingX"]}
                name="paddingX"
                id="paddingX"
                onChange={handleChange}
              />
            </MenuItem>

            <MenuItem
              name={"paddingY"}
              label="paddingY"
              value={styles["paddingY"]}
            >
              <input
                type="range"
                value={styles["paddingY"]}
                name="paddingY"
                id="paddingY"
                onChange={handleChange}
              />
            </MenuItem>
          </Menu>

          {/* colors */}
          <Menu title={"Colors"}>
            <MenuItem
              name="color"
              label={"color"}
              value={styles.color || "#000000"}
              className=""
            >
              <input
                type="color"
                id="color"
                name="color"
                value={styles["color"]}
                onChange={handleChange}
              />
            </MenuItem>
            <MenuItem
              name="background color"
              value={styles["background-color"] || "#ffffff"}
              label={"background-color"}
            >
              <input
                id="background-color"
                type="color"
                name="background-color"
                value={styles["background-color"]}
                onChange={handleChange}
              />
            </MenuItem>
          </Menu>
          {/* border */}

          <Menu title={"Border"}>
            <MenuItem
              name="border color"
              label="border-color"
              value={styles["border-color"]}
            >
              <input
                type="color"
                id="border-color"
                name="border-color"
                value={styles["border-color"]}
                onChange={handleChange}
              />
            </MenuItem>
            <MenuItem
              label={"border-width"}
              name={"border-width"}
              value={styles["border-width"]}
            >
              <input
                id="border-width"
                type="range"
                max="10"
                name="border-width"
                value={styles["border-width"]}
                onChange={handleChange}
              />
            </MenuItem>

            <MenuItem
              label={"border-type"}
              name="border type"
              value={styles["border-type"]}
            >
              <select
                name="border-type"
                onChange={handleChange}
                id="border-type"
              >
                <option value="solid">Solid</option>
                <option value="dotted">Dotted</option>
                <option value="dashed">Dashed</option>
              </select>
            </MenuItem>
            <MenuItem
              label="border-radius"
              name={"Border radius"}
              value={styles["border-radius"]}
            >
              <input
                id="border-radius"
                type="range"
                max="60"
                name="border-radius"
                value={styles["border-radius"]}
                onChange={handleChange}
              />
            </MenuItem>
          </Menu>
          <Menu title={"Shadow"}>
            <MenuItem name={"box shadow"} label="box-shadow" value={""}>
              <select
                name="box-shadow"
                value={styles["box-shadow"] || "small"}
                id="box-shadow"
                onChange={handleChange}
              >
                <option value="0 1px 2px 0 rgb(0 0 0 / 0.05)">small</option>
                <option value="0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)">
                  medium
                </option>
                <option value=" 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)">
                  large
                </option>

                <option value="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)">
                  X-large
                </option>
              </select>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="place-self-center">
        <ButtonResult />
      </div>
    </>
  );
};

export default ButtonEditor;
