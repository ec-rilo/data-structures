var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function() {

};

Queue.prototype.dequeue = function() {

};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};