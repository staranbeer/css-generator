import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu, { MenuItem } from "../../components/utils/Menu";
import { changeParaStyles } from "./paraSlice";
import ParaResult from "./ParaResult";

const ParaEditor = () => {
  const { styles } = useSelector((state) => state.para);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name: property, value } = e.target;
    dispatch(changeParaStyles({ property, value }));
  };

  return (
    <>
      <div className=" px-10 pt-8 border-r-2 w-full  mx-auto overflow-auto ">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-medium">
            Use the controls below to style the component on your right.
          </h2>
          <p className="mt-3 text-gray-700">
            Click on "Get CSS" when you're done.
          </p>
        </div>

        <div className="max-w-2xl mx-auto my-12 space-y-3">
          {/* text */}

          <Menu isActive={true} title={"Text"}>
            <MenuItem
              label={"font-family"}
              name="font family"
              value={styles["font-family"] || 400}
            >
              <select
                name="font-family"
                id="font-family"
                onChange={handleChange}
              >
                <option value="Roboto">Roboto</option>
                <option value="Bungee">Bungee</option>
                <option value="Lato">Lato</option>
              </select>
            </MenuItem>

            <MenuItem
              label={"font-size"}
              name="font size"
              value={styles["font-size"]}
            >
              <select
                name="font-size"
                value={styles["font-size"]}
                id="font-size"
                onChange={handleChange}
              >
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="20">18</option>
                <option value="24">20</option>
                <option value="32">24</option>
                <option value="40">30</option>
                <option value="48">36</option>
              </select>
            </MenuItem>

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
                <option value="300">light</option>
                <option value="400">normal</option>
                <option value="700">bold</option>
              </select>
            </MenuItem>

            <MenuItem
              label={"line-height"}
              name="line height"
              value={styles["line-height"] || 400}
            >
              <input
                type="range"
                step={4}
                name="line-height"
                id="line-height"
                onChange={handleChange}
                value={styles["line-height"]}
              />
            </MenuItem>

            <MenuItem
              label={"letter-spacing"}
              name="letter spacing"
              value={styles["letter-spacing"] || 400}
            >
              <input
                type="range"
                step={0.4}
                max="8"
                name="letter-spacing"
                id="letter-spacing"
                onChange={handleChange}
                value={styles["letter-spacing"]}
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
          </Menu>
          {/* border */}
        </div>
      </div>
      <div className="w-full h-full grid place-items-center overflow-auto">
        <ParaResult />
      </div>
    </>
  );
};

export default ParaEditor;
