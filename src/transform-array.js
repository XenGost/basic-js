const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  let transform_array =[].concat(array);
    let index = 0;
    if (array.includes('--discard-next',0)){
        index = array.indexOf('--discard-next',0);
        transform_array.splice(index, 2);
    }
    if (array.includes('--discard-prev',0)){
        index = array.indexOf('--discard-prev',0);
        transform_array.splice(index-1, 2);
    }
    if (array.includes('--double-next',0)){
        index = array.indexOf('--double-next',0);
        transform_array[index]=array[index+1];
    }
    if (array.includes('--double-prev',0)){
        index = array.indexOf('--double-prev',0);
        transform_array[index]=array[index-1];
    }

return transform_array;
}

module.exports = {
  transform
};
