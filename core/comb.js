'use strict';

const comb = (array, fnCompare) =>{

  // ordenação crescente por padrão
  if(typeof(fnCompare) == "boolean" && !fnCompare)
    fnCompare = (a, b) => {
      var r;

      if(a < b)
        r = -1;
      else if(a == b)
        r = 0;
      else
        r = 1;

      return r;
    };

  else if(typeof(fnCompare) == "boolean")
    fnCompare = (a, b) => {
      var r;

      if(a > b)
        r = -1;
      else if(a == b)
        r = 0;
      else
        r = 1;

      return r;
    };

  if (!Array.isArray(array) || array.length === 0) return [];

  let gap = array.length;
  let swapped;

  let fnSwap = function (i) {
    var temp = array[i];
    array[i] = array[i+1];
    array[i+1] = temp;
    swapped = true;
  }

  while (gap > 1 || swapped ) {

    if (gap > 1) gap = parseInt((gap/1.247330950103979));

    let i = 0;
    swapped = false;

    while (i + gap < array.length) {
      if (fnCompare(array[i], array[i + gap]) > 0) {
        let temp = array[i];
        array[i] = array[i + gap];
        array[i + gap] = temp;
        swapped = true;
      }
      i++;
    }
  }
  return array;
}

module.exports = comb;
