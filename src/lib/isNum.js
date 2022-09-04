const number = [
  "paddingX",
  "paddingY",
  "padding",
  "border-radius",
  "border-width",
  "font-size",
];

const isNum = (value) => {
  if (number.indexOf(value) !== -1) {
    return true;
  }
  return false;
};

export default isNum;
