var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var numOfKeys = Object.keys(this.storage).length;
  this.storage[numOfKeys + 1] = value;
};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);

  if (keys.length > 0) {
    var lastKey = keys[keys.length - 1];
    var lastElem = this.storage[lastKey];
    delete this.storage[lastKey];
    return lastElem;
  }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};