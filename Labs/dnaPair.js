function pairElement(strand){
  let bases = strand.split("");
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }
  return bases.map(base => [base,pairs[base]])
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
