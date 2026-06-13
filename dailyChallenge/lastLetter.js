function getLastLetter(str) {
  let filtered = str.toLowerCase().split("").filter(char => char >= 'a' && char <= 'z');
  let sorted = filtered.sort();
  let last = sorted[sorted.length-1];
  for (const char of str){
    if (char.toLowerCase() === last){
      return char;
    }
  }
}

console.log(getLastLetter("world"));
console.log(getLastLetter("Hello World"));
console.log(getLastLetter("The quick brown fox jumped over the lazy dog."));
console.log(getLastLetter("HeLl0"));
console.log(getLastLetter("!#$ er@R asd fT.,> 2t0e9"));
