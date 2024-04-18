/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

 var plusOne = (n) => n + 1;
 var plusIndex = (n, i) => n + i;
 var constant = (n) => 42;
 
var map = function(arr, fn) {
   var result = [];
    for (let i = 0; i < arr.length; i++){
      result.push(fn(arr[i], i));
    }
    return result;
      
};
