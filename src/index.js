module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) return false;
  
  let temp = str.split('');
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (temp[i] === bracketsConfig[j][1] && result[result.length - 1] === bracketsConfig[j][0]) {
        result.pop();
      } else if (temp[i] === bracketsConfig[j][0]) {
        result.push(temp[i]);
      }
    }
  }

  return result.length === 0;
}
