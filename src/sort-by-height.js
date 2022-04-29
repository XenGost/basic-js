const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  let sort_arr =[].concat(array);
  console.log(array);
  console.log(sort_arr);
  let sort=[];
  let temp =0;
  for (let i=0;i<array.length; i++){
      for (let j=0;j<array.length; j++){
          if (array[j]>=array[j+1]){
              temp = array[j];
              array[j]=array[j+1];
              array[j+1]=temp;
          }
      }
  }
  console.log(array);
  let index;
  while(index != -1){
      index=array.indexOf(-1);
      if (index != -1){
      array.splice(index, 1);}
  }
 console.log(array);
 let j=0;
 for (let i=0;i<sort_arr.length; i++){
           if (sort_arr[i]==-1){
              sort[i]=sort_arr[i];
          }
          else {
          sort.push(array[j]);
          j++;}
  }
   console.log(sort);
  return sort;
}

module.exports = {
  sortByHeight
};
