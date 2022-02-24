var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var prop = someInstance.size() + 1;
    storage[prop] = value;
  };

  someInstance.pop = function() {
    var keysArr = Object.keys(storage);
    var lastKey = keysArr[keysArr.length - 1];
    var value = storage[lastKey];
    delete storage[lastKey];
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
