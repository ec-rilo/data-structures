var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // add a value to the stack
    var prop = someInstance.size() + 1;
    storage[prop] = value;
  };

  someInstance.pop = function() {
    // remove a value from the top of the stack
  };

  someInstance.size = function() {
    // return the size of the stack
    return Object.keys(storage).length;
  };

  return someInstance;
};

/*
Analogy
  - Like a stack of pancakes on a plate
  - you start of with 0 pancakes then you add 1, 2, 3 pancakes
  - you can remove a pancake and you would be left with 1, 2 pancakes
  - a total of 2 pancakes

*/