function diffArray(firstArray, secondArray){
  let result = [];
  result.push(firstArray.filter(string => !secondArray.includes(string)));
  result.push(secondArray.filter(string => !firstArray.includes(string)));
  return result.flat();
}

console.log(diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]));

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));

console.log(diffArray(["diamond", "stick", "apple"], ["diamond", "stick", "apple"]));

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));

console.log(diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]));

console.log(diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]));

console.log(diffArray([], ["apple", "banana"]));
console.log(diffArray([], []));
