function isSorted(arr) {
  let isAscending = true;
  let isDescending = true;
  for (let i = 0; i<arr.length-1; i++){
    if (arr[i+1] < arr[i]) isAscending = false;
    if (arr[i+1] > arr[i]) isDescending = false;
    if (!isAscending & !isDescending) return "Not sorted";
  }
  if (isAscending){
    return "Ascending";
  } else if (isDescending){
    return "Descending";
  }
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([10, 8, 6, 4, 2]));
console.log(isSorted([1, 3, 2, 4, 5]));
console.log(isSorted([3.14, 2.71, 1.61, 0.57]));
console.log(isSorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9]));
console.log(isSorted([0.4, 0.5, 0.3]));
