
var list = [3, 4, 5]

// STEP 2
var sorted = function(array) {
  array.sort(function(a,b) {
    return a - b
  });
  return array
}

//STEP 1
module.exports = {
  numList: function (...num) {
    //pushes number to the list var
    return list.concat(num)
  },
  sorted: sorted
};

