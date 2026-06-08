function uniteUnique(firstArray, secondArray, ...otherArrays){
  let copyArray = firstArray;
  copyArray.push(secondArray, ...otherArrays)
  return [... new Set(copyArray.flat())]
}

console.log(uniteUnique([1, 2, 4], [2, 3, 5]));
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
