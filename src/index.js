module.exports = function check(str, bracketsConfig) {
  let closinBracket = 0;
  let openingBracket = 0;
  for (let j = 0; j < str.length; j++){
    for (let i = 0; i < bracketsConfig.length; i++){
      if (str[j] == bracketsConfig[i][0]){
        openingBracket++;
      } else if (str[j] == bracketsConfig[i][1]){
        closinBracket++;
      }
      if (closinBracket > openingBracket){
        return false;
      }
    }  
  }
  if (closinBracket != openingBracket){
    return false;
  }
  return true;
}