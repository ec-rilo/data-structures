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

};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};