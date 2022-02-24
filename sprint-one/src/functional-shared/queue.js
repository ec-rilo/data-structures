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
  enqueue: function() {

  },
  dequeue: function() {

  },
  size: function() {
    return Object.keys(this.storage).length;
  },
};


