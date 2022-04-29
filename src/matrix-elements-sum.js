const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
let result = 0;
let array =[];
let size = matrix.length;
  for(let n=0; n<size; n++){
      array = array.concat(matrix[n]);
  }
let arr=[].concat(array);
let size_max = array.length;
let a= size_max/size;
for(let i =0;i<size_max;i++){
    for(let j=i;j<i+a;j++){
        if (array[j] == 0){
            if (j<a){
                arr.splice(j, 1);
                arr.splice(j+size, 1);
                arr.splice(j+2*size, 1);}
                else if (j<2*a){
                arr.splice(j, 1);
                arr.splice(j+size, 1);
                }
                else if (j<3*a){
                arr.splice(j, 1);
                }
            }
    }
}
for(let i =0;i<arr.length;i++){
    result += arr[i];
}
return result;
}

module.exports = {
  getMatrixElementsSum
};
