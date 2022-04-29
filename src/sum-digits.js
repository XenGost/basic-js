const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
      let array =Array.from(n.toString(), Number);
    let sum =  0;
    if (array.length > 1){
         for (let i=0; i< array.length; i++){
             sum =sum + array[i];
         }
     }

    let arr =Array.from(sum.toString(), Number);

    if (arr.length > 1){
         return getSumOfDigits(sum);
    }
     return sum;
}

module.exports = {
  getSumOfDigits
};
