function sumAll(array){
  let sum = 0;
  let startNum = Math.min(array[0],array[1]);
  let endNum = Math.max(array[0],array[1]);

  for (let i=startNum; i <= endNum; i++){
    sum += i
  }
  return sum;
}


console.log(sumAll([6, 2]));
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));


