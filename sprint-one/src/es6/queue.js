class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var keys = Object.keys(this.storage);
    var lastKey;
    keys.length === 0 ? lastKey = 0 : lastKey = keys[keys.length - 1];
    this.storage[Number(lastKey) + 1] = value;
  }

  dequeue() {
    var keys = Object.keys(this.storage);
    var firstKey = keys[0];
    var firstElem = this.storage[firstKey];
    delete this.storage[firstKey];
    return firstElem;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
