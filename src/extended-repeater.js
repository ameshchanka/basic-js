import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  // options is an object of options, that contains properties:
  // repeatTimes sets the number of repetitions of the str;  --------->  0
  // separator is a string separating repetitions of the str; +
  // addition is an additional string that will be added to each repetition of the str;
  // additionRepeatTimes sets the number of repetitions of the addition;   -----------> 0
  // additionSeparator is a string separating repetitions of the addition. |
  let res = "";
  if(options) {
    if(!options.hasOwnProperty('repeatTimes') || options.repeatTimes === undefined) options.repeatTimes = 0;
    if(!options.hasOwnProperty('additionRepeatTimes') || options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
    if(!options.hasOwnProperty('separator') || options.separator === undefined) options.separator = "+";
    if(!options.hasOwnProperty('additionSeparator') || options.additionSeparator === undefined) options.additionSeparator = "|";
    if(!options.hasOwnProperty('addition') || options.addition === undefined) options.addition = "";
    
    if(typeof(str) !== "string") str = new String(str);
    let i = 0;
    
      while( i < options.additionRepeatTimes) {
        res += options.addition;
        if(i+1 < options.additionRepeatTimes) res += options.additionSeparator;
        i++;
      }
    
    i = 1;
    str = str + res;
    res = new String(str);
    while( i < options.repeatTimes) {
      if(i+1 <= options.repeatTimes) str += options.separator;
      str += res;
      i++;
    }
    return str;
  }

}
