import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  
  machien = true;
  constructor(arg){
    if(arg === false) this.machien = false;
    else if(arg == undefined || true) this.machien = true;
    
  }
  line = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  enc(str, k){
    str = str.split("");
    k = k.split("");
    let ci , mi , ki , j = 0;
    for (let i = 0; i < str.length; i++) {
      mi = this.line.indexOf(str[i]);
      if(mi >= 0) {
        ki = this.line.indexOf(k[j % k.length]);
        j++;
        ci = (mi + ki) % 26;
        str[i] = this.line.substring(ci,ci + 1);
      }
    }
    return str.join("");
  }

  dec(str, k){
    str = str.split("");
    k = k.split("");
    let ci , mi , ki , j = 0;
    for (let i = 0; i < str.length; i++) {
      
      ci = this.line.indexOf(str[i]);
      if(ci >= 0) {
        ki = this.line.indexOf(k[j % k.length]);
        j++;
        mi = (ci - ki + 26) % 26;
        str[i] = this.line.substring(mi, mi + 1);
      }
    }
    return str.join("");
  }

  encrypt(str, k) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    //Incorrect arguments!
    if(typeof(str) !== "string" || str === "" || typeof(k) !== "string" || k === "") throw new Error("Incorrect arguments!");
    str = str.toUpperCase();
    k = k.toUpperCase();
    str = this.enc(str,k);
    if(this.machien) return str;
    else return str.split("").reverse().join("");
  }
  decrypt(str, k) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(typeof(str) !== "string" || str === "" || typeof(k) !== "string" || k === "") throw new Error("Incorrect arguments!");
    k = k.toUpperCase();
    str = this.dec(str,k);
    if(this.machien) return str;
    else return str.split("").reverse().join("");
  }
}
