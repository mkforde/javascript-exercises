const palindromes = function (sentenceRaw) {
  const sentenceNoSpecialChar = sentenceRaw.replace(/[.,!]/g, "").toLowerCase();
  let sentenceArray = sentenceNoSpecialChar.split(", "); // array

  let array = [];
  let palindrome = true;
  for (let word of sentenceArray) { 
      let opposite = "";
      for (let i = word.length -1; i >= 0; i--) {
        opposite += word.at(i)
      }
      array.push(opposite);
  }
  // back to string
  let reversedSentence = array.toString(); 
  let sentence = sentenceArray.toString();
  sentence = sentence.replace(/[" "]/g, "");
  reversedSentence = reversedSentence.replace(/[" "]/g, "");

  if (sentence != reversedSentence) { palindrome = false;}

  return palindrome;

};

// Do not edit below this line
module.exports = palindromes;
