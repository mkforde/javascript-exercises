const reverseString = function(word) {
  let arr = word.split(" ");
  let result = "";

  for (let i = arr.length; i > 0; i--) {
    let reversedWord = "";
    for (let j = arr[i-1].length - 1; j >= 0; j--) {
      reversedWord += arr[i-1].at(j);
    }
    result += reversedWord;

    if (i != 1) {
      result += " ";
    }
  }

  return result;

};
// Do not edit below this line
module.exports = reverseString;
