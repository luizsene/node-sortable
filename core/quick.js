'use strict';

const quick = (array, fnCompare) => {

  // ordenação crescente por padrão
  if(typeof(fnCompare) == "boolean" && !fnCompare)
    fnCompare = (a, b) => a < b;
  else if(typeof(fnCompare) == "boolean")
    fnCompare = (a, b) => a > b;


  if (!Array.isArray(array) || array.length === 0) return [];

  let left = [];
  let right = [];
  let pivot = array[0];

  for (let i = 1; i < array.length; i++) {
    fnCompare(array[i], pivot) ? left.push(array[i]) : right.push(array[i]);
  }

  return quick(left, fnCompare).concat(pivot, quick(right, fnCompare));
}


module.exports = quick;
