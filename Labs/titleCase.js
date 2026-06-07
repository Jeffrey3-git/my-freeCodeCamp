const titleCase = sentence => sentence.split(" ").filter(word => word.length > 0).map(word => word[0].toUpperCase()+ word.slice(1).toLowerCase()).join(" ");

console.log(titleCase("Web   Development Is Awesome"));
console.log(titleCase("I like to code"));
console.log(titleCase("javaScript is fun"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
