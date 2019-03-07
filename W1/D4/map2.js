var words = ["ground", "control", "to", "major", "tom"];

var map = function (words, func) {
  array = [];
  for (word of words) {
    array.push(func(word));
  }
  console.log(array)
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


//[6, 7, 2, 5, 3]

//[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

//[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]



