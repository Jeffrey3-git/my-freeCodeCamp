function isEvenlyDivisible(a, b) {

  return a%b === 0;
}


console.log(isEvenlyDivisible(4, 2));    //true
console.log(isEvenlyDivisible(7, 3));    //false
console.log(isEvenlyDivisible(5, 10));   //false
console.log(isEvenlyDivisible(48, 6));   //true
console.log(isEvenlyDivisible(3186, 9)); //true
console.log(isEvenlyDivisible(4192, 11));//false
