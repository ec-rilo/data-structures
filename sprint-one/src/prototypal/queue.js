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
  // remove elements from front of queue
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};