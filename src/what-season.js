import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  //spring, summer, autumn (fall), winter
  //'Unable to determine the time of year!'
  //Invalid date!
  //return Object.keys(date);
  if(!date)  return 'Unable to determine the time of year!';
  if(Object.keys(date).length !== 0) throw new Error('Invalid date!');
  if(Object.prototype.toString.call(date) === "[object Date]") {
    let month = date.getMonth();
    let day = date.getDate()
    if(month === 11 && day >= 1 && day <=31 ) return "winter";
    if(month === 0 && day >= 1 && day <=31 ) return "winter";
    if(month === 1 && day >= 1 && day <=28 ) return "winter";
    if(month === 2 && day >= 1 && day <=31) return "spring";
    if(month === 3 && day >= 1 && day <=30) return "spring";
    if(month === 4 && day >= 1 && day <=31) return "spring";
    if(month === 5 && day >= 1 && day <=30) return "summer";
    if(month === 6 && day >= 1 && day <=31) return "summer";
    if(month === 7 && day >= 1 && day <=31) return "summer";
    if(month === 8 && day >= 1 && day <=30) return "autumn (fall)";
    if(month === 9 && day >= 1 && day <=31) return "autumn (fall)";
    if(month === 10 && day >= 1 && day <=30) return "autumn (fall)";
  }
  else throw new Error('Invalid date!');
}
