function getInitials(name) {
  let seperate = name.split(" ");
  let result = "";
  for (const char of seperate){
      result += char[0].toUpperCase()+".";
  }
  return result;
}


console.log(getInitials("Tommy Millwood"));
console.log(getInitials("Savanna Puddlesplash"));
console.log(getInitials("Frances Cowell Conrad"));
console.log(getInitials("Dragon"));
console.log(getInitials("Dorothy Vera Clump Haverstock Norris"));
