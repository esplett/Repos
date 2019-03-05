function average(list) {
  var sum = 0;

  for (var num of list) {
    //fix this
    sum += num;
  }

  return sum / list.length;
}//added this

console.log(average([3, 5, 7]));


