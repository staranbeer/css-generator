const number = [
  'paddingX',
  'paddingY',
  'padding',
  'border-radius',
  'border-width',
  'font-size',
  'line-height',
  'letter-spacing',
  'word-spacing',
];

const isNum = (value) => {
  if (number.indexOf(value) !== -1) {
    return true;
  }
  return false;
};

export default isNum;
