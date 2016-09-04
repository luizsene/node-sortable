'use strict';

const merge = (array, fnCompare) =>{

  fnCompare = require("../condition/merge")(fnCompare);

  if (!Array.isArray(array) || array.length === 0) return [];

  const sort = (arr) =>{
    let length = arr.length;
    let middle = Math.floor(length * 0.5);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, length);

    if(length === 1) return arr;

    return mergeSort(sort(left), sort(right));
  }

  const mergeSort = (left, right) =>{
    let result = [];

    const execLeft = () =>{
      result.push(left.shift());
    }
    const execRight = () =>{
      result.push(right.shift());
    }

    const execAll = () =>{
      if(fnCompare(left[0], right[0]))
        execLeft()
      else
        execRight()
    }

    while (left.length || right.length) {
      if(left.length && right.length)
        execAll();
      else if(left.length)
        execLeft();
      else
        execRight();
    }

    return result
  }

  return sort(array);
}

module.exports = merge;
