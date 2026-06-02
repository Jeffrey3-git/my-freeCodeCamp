function fearNotLetter(alpha){
  let start = alpha.charCodeAt(0);
  let end = alpha.charCodeAt(alpha.length-1);
  for (let i = start; i<=end; i++){
    let letter = String.fromCharCode(i);
    if ( !(alpha.includes(letter))){
      return letter;
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

