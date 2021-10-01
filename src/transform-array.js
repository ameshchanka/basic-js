import { NotImplementedError } from '../extensions/index.js';

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
 * --discard-next excludes the next element of the array from the transformed array.
 * --discard-prev excludes the previous element of the array from the transformed array.
 * --double-next doubles the next element of the array in the transformed array.
 * --double-prev doubles the previous element of the array in the transformed array.
 * arr.splice(2, 0, "Lene");
 */
export default function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //return arr;
  let c = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];

  if(Array.isArray(arr)){
    let arr1 = [].concat(arr);
    let i = 0;
    while(i < arr1.length) {
      if(arr1[i] === '--discard-next' && (i + 1) < arr1.length && c.some((element) => {return element !== arr1[i + 1]})) {
        arr1.splice(i + 1, 1);
      }
      if(arr1[i] === '--discard-prev' && (i - 1) > 0 && c.some((element) => { return element !== arr1[i - 1]})) {
        arr1.splice(i - 1, 1);
        i = i - 1;
      }
      if(arr1[i] === '--double-next' &&  (i + 1) < arr1.length && c.some((element) => {return element !== arr1[i + 1]})) {
        arr1[i] = arr1[i+1];
      }
      if(arr1[i] === '--double-prev' && (i - 1) > 0 && c.some((element) => { return element !== arr1[i - 1]})) {
        arr1[i] = arr1[i-1];
      }
      i++;
    }
    i = 0;
    while(i < arr1.length) {
      if(c.some((element) => {return element === arr1[i]})) {
        arr1.splice(i, 1);
        i = i - 1;
      }
      i++;
    }
    
    return arr1;
  }
  throw new Error("'arr' parameter must be an instance of the Array!");
}