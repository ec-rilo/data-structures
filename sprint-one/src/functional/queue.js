var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // adds string to back of queue
    // adds string to queue

    // PSEUDO
    // define a variable called property init with
    // The size of the queue, incremented it by 1

    // add the property 'property' to storage and initialize it with value
  };

  someInstance.dequeue = function() {
    // remove and return string at front of queue
    // it's like a person leaving in line

    // PSEUDO
    // if storage size is greater then 0
      // define a variable called val init with the first item in queue
      // delete the first item in queue
      // return val
  };

  someInstance.size = function() {
    // returns the number of items in queue

    // PSEUDO
    // return the number of keys in storage

    return Object.keys(storage).length;
  };

  return someInstance;
};

/*
IOCE

in:

out:

cons:
 - no arrays!
 - use an object with numeric keys
 - first person in line is the first one going through 6ith person in
   line would be like the last person

edge:
  - returns 0 when no items are in queue

*/