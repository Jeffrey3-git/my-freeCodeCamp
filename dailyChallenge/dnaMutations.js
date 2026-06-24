function detectMutations(strand1, strand2) {
  const arr1 = strand1.split("");
  const arr2 = strand2.split("");
  const results = []
  for (let i =0; i< arr1.length;i++){
    if (arr1[i] !== arr2[i]){
      results.push(i)
    };
  }
  return results;
}

console.log(detectMutations("ATCG", "ATGG"));
console.log(detectMutations("ATGCGTACGTTAGC", "ATGCATACGATTGC"));
console.log(detectMutations("GATCTAGCTAGGCTAGCTAG", "GATCTAGCTAGGCTAGCTAG"));
console.log(detectMutations("TCAGATCATGGCTAGCTACGATCAGCTAGCATGCATATCGACTG", "TCAGATCATGGCTAGAGCTGATCAGCTAGCATGCATATCGACTG"));
console.log(detectMutations("ACGTCAGTACGCACATGACCATTGACATA", "AACGTCAGTACGCACATGACCATTGACAT"));
