function getFrequency(str) {
  let result = {
  }
  for (const char of str){
    result[char] = (result[char] || 0) + 1
  }
  return result;
}

console.log(getFrequency("test"));
console.log(getFrequency("mississippi"));
console.log(getFrequency("hello world"));
//console.log(getFrequency("She sells seashells by the seashore."));
//console.log(getFrequency("The quick brown fox jumps over the lazy dog."));
