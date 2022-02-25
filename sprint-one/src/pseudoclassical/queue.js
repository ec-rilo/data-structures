var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  if (this.size() === 0) {
    this.storage['1'] = value;
  } else {
    var keys = Object.keys(this.storage);
    var lastKey = keys[keys.length - 1];
    this.storage[Number(lastKey) + 1] = value;
  }
};

Queue.prototype.dequeue = function() {
  if (this.size !== 0) {
    var firstProp = Object.keys(this.storage)[0];
    var firstElem = this.storage[firstProp];
    delete this.storage[firstProp];
    return firstElem;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};