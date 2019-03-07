var countdownGenerator = function (x) {
  var index = x + 1
    return function() {
      index --
      if (index > 0) {
        return `T-minus ${index}...`
      } else if (index === 0) {
        return `Blast Off!`
      } else {
        return `Rockets already gone, bub!`
      }
    }

}

var countdown = countdownGenerator(5);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!






// Implement a function countdownGenerator() that takes in
// a number x and returns a function that counts down when
// it is called (see starter code below).

