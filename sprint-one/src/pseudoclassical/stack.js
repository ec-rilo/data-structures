var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var numOfKeys = Object.keys(this.storage).length;
  this.storage[numOfKeys + 1] = value;
};

Stack.prototype.pop = function() {
  var keys = Object.keys(this.storage);
  var lastKey = keys[keys.length - 1];
  var lastElem = this.storage[lastKey];
  delete this.storage[lastKey];
  return lastElem;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
