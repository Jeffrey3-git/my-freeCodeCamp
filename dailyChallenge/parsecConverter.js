function convertParsecs(parsecs){
  const time = 2;
  const distance = 6;
  return parsecs%2 === 0 ? parsecs*(distance/2): parsecs*time;
} 

console.log(convertParsecs(1));
console.log(convertParsecs(2));
console.log(convertParsecs(31));
console.log(convertParsecs(88));
console.log(convertParsecs(17));
console.log(convertParsecs(14));
