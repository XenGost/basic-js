const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let cats = [];
  let result = 0;
  let size = array.length;
  for(let n=0; n<size; n++){
      cats = cats.concat(array[n]);}
  for (let i=0; i<cats.length; i++){
         if (cats[i] == '^^') {
             result+=1;
         }
  }
  return result;
}

module.exports = {
  countCats
};
