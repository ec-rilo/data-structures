class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var newLocation;
    var stackSize = this.size();
    stackSize === 0 ? newLocation = 1 : newLocation = stackSize + 1;
    this.storage[newLocation] = value;
  }

  pop() {
    var stackSize = this.size();
    if (stackSize !== 0) {
      var keys = Object.keys(this.storage);
      var lastKey = keys[keys.length - 1];
      var lastElem = this.storage[lastKey];
      delete this.storage[lastKey];
      return lastElem;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }
}