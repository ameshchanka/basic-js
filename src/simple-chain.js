import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  //s: "",
  arr: new Array(0),
  
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length ? this.arr.length : 0;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(arguments.length === 0) this.arr.push(" ");
    else {
      this.arr.push(0);
      this.arr[this.arr.length - 1] = value;
    }
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(position && typeof(position) === "number" && Math.trunc(position) === position 
    && position <= this.getLength() && position > 0 && this.getLength() > 0) {
      
      this.arr.splice(position-1, 1); 
      return this;
    }
    this.arr = new Array(0);
    throw Error("You can't remove incorrect link!");
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.getLength() > 0) this.arr.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let s = "";
    for (let i = 0; i < this.getLength(); i++) {
      s = s + "( " + this.arr[i] + " )";
      if(i + 1 < this.getLength()) s = s + "~~";
    }
    this.arr = new Array(0);
    return s;
  }
};
