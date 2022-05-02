const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let result=[];
  let number =0;
  for (let i=0; i<arr.length;i++){
      for (let j=0; j<arr.length;j++){
        if (arr[i] == arr[j]){
            number+=1;
        }
    }
    if (number == 1){
        result[i]= arr[i];
    }
    else{
        result[i]=number + arr[i];
    }
    number = 0;
  }
  let strres = new Set(result);
  
  return Array.from(strres).join('')
}

module.exports = {
  encodeLine
};
