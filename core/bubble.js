'use strict';

const bubble = (array, fnCompare) =>{

  // ordenação crescente por padrão
  if(typeof(fnCompare) == "boolean" && !fnCompare)
    fnCompare = (a, b) => a > b;
  else if(typeof(fnCompare) == "boolean")
    fnCompare = (a, b) => a < b;

  if (!Array.isArray(array) || array.length === 0) return [];

  let swapped;

  let fnSwap = function (i) {
    var temp = array[i];
    array[i] = array[i+1];
    array[i+1] = temp;
    swapped = true;
  }

  do {
    swapped = false;
    array.forEach((elem, i) => {
      if(fnCompare(array[i], array[i+1])) fnSwap(i);
    });
  } while (swapped);

  return array;
}

module.exports = bubble;
