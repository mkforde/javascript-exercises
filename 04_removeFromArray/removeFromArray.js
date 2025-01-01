const removeFromArray = function(array, ...args) {
  // let array = array.slice(0);

  for (let arg of args) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === arg) {
        array.splice(i,1);
        i--;
      }
    }
  }
  return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
