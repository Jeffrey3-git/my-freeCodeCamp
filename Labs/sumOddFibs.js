function sumFibs(num){
  let first = 0;
  let second = 1;
  let oddSum = 0;
  while (first <= num){
    if (first %2 !==0){
      oddSum += first;
    }
    let next = first+second;
    first = second;
    second = next;
  }
  return oddSum;
}

console.log(sumFibs(1));
console.log(sumFibs(100));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
