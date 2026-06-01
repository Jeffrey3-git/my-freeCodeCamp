function chunkArray(arr,num){
  let chunk = [];
  for (let i = 0; i < arr.length; i+=num){
    chunk.push(arr.slice(i,i+num))
  }
  return chunk;
}

console.log(chunkArray([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
