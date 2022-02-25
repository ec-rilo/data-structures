var Stack = function() {
  var instance = {};
  instance.storage = {};

  _.extend(instance, stackMethods);

  return instance;
};


var stackMethods = {
  push: function(value) {
    var numOfKeys = Object.keys(this.storage).length;
    this.storage[numOfKeys + 1] = value;
  },
  pop: function() {
  // pop elements from the top of the stack and return the popped element
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


