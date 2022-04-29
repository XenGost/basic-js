const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let array = [];
    let number = 0;
    array =Array.from(n.toString(), Number);
    let size = array.length;
    for(let i =0;i<size; i++){
        if (array[i] < array[i+1]) {
            array.splice(i, 1);
            break;
        }
        if (array[i] > array[i+1] && i+1 === size - 1) {
            array.splice(i+1, 1);
        }
    }
    number = Number(array.join(''));
    return number;
}

module.exports = {
  deleteDigit
};
