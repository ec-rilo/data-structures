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

};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};