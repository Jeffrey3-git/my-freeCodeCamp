function isMirrorImage(str1, str2) {
  const charsObj = {
    "[": "]", "]": "[",
    "{": "}", "}": "{",
    "<": ">", ">": "<",
    "b": "d", "d": "b",
    "p": "q", "q": "p",
    "(": ")", ")": "("
  }
  const reversedStr1 = str1.split("").reverse();
  const mirror = reversedStr1.map(str => charsObj[str] || str).join("");
  return mirror === str2;
}

console.log(isMirrorImage("[HOW]", "[WOH]"));
console.log(isMirrorImage("MOM", "MOM"));
console.log(isMirrorImage("vow", "wov"));
console.log(isMirrorImage("TIM", "TIM"));
console.log(isMirrorImage("{WOW}", "}WOW{"));
console.log(isMirrorImage("XXVII", "IIV%X"));
console.log(isMirrorImage("><(((*>", "<*)))><"));
console.log(isMirrorImage("WTYUIOHAXVMwoxv08=+:|-_*^!.[]{}<>bdpq()", "()pqbd<>{}[].!^*_-|:+=80vxowMVXAHOIUYTW"));
