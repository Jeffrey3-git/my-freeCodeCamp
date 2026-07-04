function kaprekar(n) {
  const kaprekar_constant = 6174;
  let counter = 0;
  let result = n;
  let num = n;
  while(result !== kaprekar_constant) {   
    let digits = num.toString().padStart(4, "0").split("");
    let asc = [...digits].sort().join("");
    let desc = [...digits].sort().reverse().join("");
    result = Number(desc) - Number(asc);
    counter++
    num =  result;
  }
  return counter;
}



console.log(kaprekar(1234));
console.log(kaprekar(2025));
console.log(kaprekar(7173));
console.log(kaprekar(3164));
console.log(kaprekar(8082));
