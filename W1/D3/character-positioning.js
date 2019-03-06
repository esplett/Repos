function position (word) {
  var characters = {};

  for (var i=0; i < word.length; i++) {
    var letter = word[i]

    // if the letter value is undefined
    if (!characters[letter]) {
      characters[letter] = [i]
    } else {
      characters[letter].push(i)
    }
  }
  return characters
}

console.log(position("lighthouse in the house"))


// l: [0]
// i: [1, 11]
// g: [2]
// h: [3, 5, 15, 18]
// t: [4, 14]
// o: [6, 19]
// u: [7, 20]
// s: [8, 21]
// e: [9, 16, 22]
// " " : [10, 13, 17]
// n: [12]

