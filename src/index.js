module.exports = function check(str, bracketsConfig) {
  let closinBracket = 0;
  let openingBracket = 0;
  for (let i = 0; i < bracketsConfig.lenght; i++){
    for (let j = 0; j < str.lenght; j++){
      if (str[j] == bracketsConfig[i][0]){
        openingBracket++;
      } else if (str[j] == bracketsConfig[i][0]){
        closinBracket++;
      }
    }
    if (closinBracket != openingBracket){
      return false;
    }
    closinBracket = 0;
    openingBracket = 0;
  }
  return true;
}
