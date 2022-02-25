var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var numOfKeys = Object.keys(this.storage).length;
  this.storage[numOfKeys + 1] = value;
};

Stack.prototype.pop = function() {

};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
