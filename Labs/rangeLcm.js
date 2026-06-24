function smallestCommons(rangeArr){
  const start = Math.min(rangeArr[0], rangeArr[rangeArr.length-1]);
  const end = Math.max(rangeArr[0], rangeArr[rangeArr.length-1])
  const gcd = (a,b) => b===0? a: gcd(b, a%b);
  const lcm = (a,b) => a*(b/gcd(a,b));
  let currentLcm = start;
  for (let i=start+1; i<=end;i++){
    currentLcm = lcm(currentLcm,i);
  }
  return currentLcm;
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
