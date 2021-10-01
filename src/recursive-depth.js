import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let c = 0;
    let max = 0;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(Array.isArray(arr)){
      c = 1;
      max = 1;
      for(let i = 0; i < arr.length; i++){
        c += this.calculateDepth(arr[i]); 
        if(c > max) 
          max = c; 
          c = 1; 
      }
    }
    return max;
  }
}
