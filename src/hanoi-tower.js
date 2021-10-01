import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disks, turnsSpeed) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let turns = Math.pow(2, disks) - 1;
  /*
  let arr1 = new Array(disks);
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = i + 1;
  }
  let arr2 = [];
  let arr3 = [];
  let turns = 0;
  let a1 = 0;
  let a2 = 0;
  let a3 = 0;
  let current = 0;

  do{
    if(arr1.length > 0) a1 = arr1[0];
    else a1 = disks + 1;
    if(arr2.length > 0) a2 = arr2[0];
    else a2 = disks + 1;
    if(arr3.length > 0) a3 = arr3[0];
    else a3 = disks + 1;

    if(current != 1 && a1 < a2) {
      arr1.shift();
      arr2.unshift(a1);
      current = 2;
    }
    else if(current != 1 && a1 < a3){
      arr1.shift();
      arr3.unshift(a1);
      current = 3;
    }
    else if(current != 2 && a2 < a3){
      arr2.shift();
      arr3.unshift(a2);
      current = 3;
    }
    else if(current != 2 && a2 < a1){
      arr2.shift();
      arr1.unshift(a2);
      current = 1;
    }
    else if(current != 3 && a3 < a1){
      arr3.shift();
      arr1.unshift(a3);
      current = 1;
    }
    else if(current != 3 && a3 < a2){
      arr3.shift();
      arr2.unshift(a3);
      current = 2;
    }
    turns++;
  } while((arr2.length < disks) & (arr3.length < disks));
  //console.log(arr1.length + " - " + arr2.length + " - " + arr3.length + " = " + turns);*/
  return {turns: turns, seconds: Math.floor(turns / turnsSpeed * 3600)}
}
