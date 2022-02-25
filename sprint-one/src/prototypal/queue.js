var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (this.size() === 0) {
    this.storage['1'] = value;
  } else {
    var keys = Object.keys(this.storage);
    var lastKey = keys[keys.length - 1];
    this.storage[lastKey + 1] = value;
  }
};

queueMethods.dequeue = function() {
  var keys = Object.keys(this.storage);
  var firstElem = this.storage[keys[0]];
  delete this.storage[keys[0]];
  return firstElem;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};