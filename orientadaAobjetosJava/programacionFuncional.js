// Imperative Programming Example: Using Iterator
var sum = 0;
var array = [1, 2, 3];
for (var i in array) {
  // Iterate (loop) over each item in the list
  sum += array[i]; // Mutate (change) the sum variable each iteration
}
console.log(sum); // Result: 6

// Declarative Programming Example: Using Arrow Function
const arraySum = array => array.reduce((a, b) => a + b, 0);
// This literally means to reduce the array to one item by summing it.
// We never change the state of any defined variable during that process.
// We simply declare what we want to happen -- reduce the array by summing.
// That is equivalent to the following, written without using arrow functions:
const arraySumLongHand = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }, 0);
};
// An even simpler example of functional programming would be:
// const arraySum = array.sum() if there were such a function.