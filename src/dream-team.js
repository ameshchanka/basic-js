import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(Array.isArray(members)){
    let s = "";
    let arr = [];
    for(let i = 0; i < members.length; i++){
      if(typeof(members[i]) === 'string') {
        arr.push(members[i]);
      }
    }
    if(!arr.length > 0 ) return false;
    for(let i = 0; i < arr.length; i++){
     arr[i] = arr[i].trim().substring(0, 1).toUpperCase();
    }
    arr.sort();
    for(let i = 0; i < arr.length; i++){
     s = s + arr[i];
    }
    return s;
  }
  return false;
}
