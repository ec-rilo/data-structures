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
    var keys = Object.keys(this.storage);
    if (keys.length > 0) {
      var lastProp = keys[keys.length - 1];
      var lastElem = this.storage[lastProp];
      delete this.storage[lastProp];
      return lastElem;
    }
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


