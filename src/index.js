module.exports = function check(str, bracketsConfig) {
  let brackets = 0;
  for (let j = 0; j < str.length; j++) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
        brackets++;
        brackets--;
      } else if (str[j] == bracketsConfig[i][0]) {
        brackets++;
      } else if (str[j] == bracketsConfig[i][1]) {
        brackets--;
      }
      if (brackets < 0) {
        return false;
      }
    }
  }
  if (brackets != 0) {
    return false;
  }
  return true;
}

//5 10 13 14