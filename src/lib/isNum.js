const number = ["padding-left", "padding-top"];

const isNum = (value) => {
  if (number.indexOf(value) !== -1) {
    return true;
  }
  return false;
};

export default isNum;
