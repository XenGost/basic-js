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
  let number=0;
  for (let i=0; i<arr.length;i++){
      for (let j=i; j<arr.length;j++){
          if (arr[i]==arr[i-1]){
              break;
          }
        if (arr[i] == arr[j]){
            number+=1;
            result[i]=number + arr[i];
            if (number == 1){
                result[i]= arr[i];
             }
        }
        else{
            number=0;
            
            break;
        }
    }
   
    number = 0;
  }

 return result.join('');
}

module.exports = {
  encodeLine
};
