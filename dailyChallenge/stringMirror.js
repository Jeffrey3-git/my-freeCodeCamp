function mirror(str) {

  return str += str.split("").reverse().join("");
}
console.log(mirror("freeCodeCamp"));
console.log(mirror("RaceCar"));
console.log(mirror("helloworld"));
console.log(mirror("The quick brown fox..."));
