'use strict';
module.exports = (fnCompare)=>{
  let swap = fnCompare;

  if(typeof(fnCompare) == "boolean" && !fnCompare)
    fnCompare = (a, b) => {
      let r;
      if(a < b) r = -1;
      else if(a == b) r = 0;
      else r = 1;
      return r;
    };
  else if(typeof(fnCompare) == "boolean")
    fnCompare = (a, b) => {
      let r;
      if(a > b) r = -1;
      else if(a == b) r = 0;
      else r = 1;
      return r;
    };
  else
    fnCompare = false;

  return fnCompare ? fnCompare : swap;
}
