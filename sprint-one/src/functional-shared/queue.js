var Queue = function() {
  var instance = {};
  instance.storage = {};

  _.extend(instance, queueMethods);

  // enqueue method - argument: (string)
  // add a string to back of queue

  // dequeue method
  // remove and return the string at the front of queue

  // size method
  // return the size of the items in queue

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    var keys = Object.keys(this.storage);
    if (keys.length === 0) {
      this.storage['1'] = value;
    } else {
      var newProperty = Number(keys[keys.length - 1]) + 1;
      this.storage[newProperty] = value;
    }
  },
  dequeue: function() {
    if (this.size() > 0) {
      var firstElemProp = Object.keys(this.storage)[0];
      var firstElem = this.storage[firstElemProp];
      delete this.storage[firstElemProp];
      return firstElem;
    }
  },
  size: function() {
    return Object.keys(this.storage).length;
  },
};


