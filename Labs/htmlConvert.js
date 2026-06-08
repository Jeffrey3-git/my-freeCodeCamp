function convertHTML(string){
  let htmlPair = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
   return string
    .split("")
    .map(char => htmlPair[char] || char)
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
