function steamrollArray(nestedArr){
  let results = [];
  const entry = arr => {
    for (let i=0; i<arr.length;i++){
      if (Array.isArray(arr[i])){
        entry(arr[i]);
      } else {
        results.push(arr[i]);
      }
    }
  }
  entry(nestedArr)
  return results;
}

console.log(steamrollArray([[["a"]], [["b"]]]));

console.log(steamrollArray([1, [2], [3, [[4]]]]));

console.log(steamrollArray([1, [], [3, [[4]]]]));

console.log(steamrollArray([1, {}, [3, [[4]]]]));
