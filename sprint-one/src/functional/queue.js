var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (someInstance.size() === 0) {
      storage['1'] = value;
    } else {
      var keysArray = Object.keys(storage);
      var lastKey = Number(keysArray[keysArray.length - 1]);
      var location = lastKey + 1;
      storage[location] = value;
    }
  };

  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      var itemProp = Object.keys(storage)[0];
      var item = storage[itemProp];
      delete storage[itemProp];
      return item;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
