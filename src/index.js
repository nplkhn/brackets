module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let first = true;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
        if (first) {
          stack.push(str[i]);
          first = false;
        } else {
          if (str[i] == bracketsConfig[j][1] && stack[stack.length - 1] == bracketsConfig[j][0]) {
            stack.pop();
            first = true;
          }
        }
      } else if (str[i] == bracketsConfig[j][0]) {
        stack.push(str[i]);
      } else if (str[i] == bracketsConfig[j][1] && stack[stack.length - 1] == bracketsConfig[j][0]) {
        stack.pop();
      } else if (str[i] == bracketsConfig[j][1] && stack[stack.length - 1] != bracketsConfig[j][0]) {
        return false;
      }
    }
  }
  if (stack.length != 0) {
    return false;
  }
  return true;
}

//5 10 13 14