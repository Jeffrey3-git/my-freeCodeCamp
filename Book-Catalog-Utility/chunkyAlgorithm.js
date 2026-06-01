function chunkArrayInGroups(arr,num){
  let start = 0;
  let end = num;
  let chunk = [];

  function getChunk(start,end){
    if (start > arr.length-1){
      return chunk;
    } else {
      chunk.push(arr.slice(start,end));
      return getChunk(end,end+num);
    }
  }
  return getChunk(start,end);
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log();

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log();

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log();

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log();

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log();

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log();

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log();
