const getOddWords = str => str.split(" ")
  .filter(word => word
  .length %2 !== 0)
  .join(" ");

console.log(getOddWords("This is a super good test"));
console.log(getOddWords("one two three four"));
console.log(getOddWords("banana split sundae with rainbow sprinkles on top"));
console.log(getOddWords("The quick brown fox jumped over the lazy river"));
