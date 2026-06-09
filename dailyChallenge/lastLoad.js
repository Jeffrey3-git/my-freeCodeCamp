function lastLoadDate(scoops, usage) {
  let sum =0;
  sum = usage.reduce((acc,cur) => acc + cur,0);
  let average = sum/usage.length;
  return Math.floor(scoops/average);
}

console.log(lastLoadDate(10, [2, 2, 2, 2, 2, 2, 2]));
console.log(lastLoadDate(16, [2, 3, 0, 3, 4, 2, 1]));
console.log(lastLoadDate(33, [5, 0, 4, 3, 3, 2]));
console.log(lastLoadDate(50, [2, 0, 2, 9, 12, 0, 2]));
console.log(lastLoadDate(20, [13, 9, 12, 10, 8]));
