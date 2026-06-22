function makeLeet(str) {
  const subs = {
    a: 4,
    e: 3,
    g: 9,
    i: 1,
    l: 1,
    o: 0,
    s: 5,
    t: 7
  };
  return str.split("").map(string => subs[string] ?? string).join("");
}



console.log(makeLeet("cool"));
console.log(makeLeet("leet"));
console.log(makeLeet("hacker"));
console.log(makeLeet("satellite"));
console.log(makeLeet("abcdefghijklmnopqrstuvwxyz"));
