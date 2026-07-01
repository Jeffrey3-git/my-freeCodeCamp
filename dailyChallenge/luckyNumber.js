function getCounts(word){
  if (!word) return {"vowels": 0, "consonants": 0, "length":0};
  const vowelArr = ['a','e','i','o','u']
  const consonantArr = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
  let vowels = 0;
  let consonants = 0;
  for (const char of word){
    if (vowelArr.includes(char)){
      vowels+=1;
    }
    if (consonantArr.includes(char)){
      consonants+=1
    }
  }
  return {"vowels": vowels, "consonants": consonants, "length":word.length}
}

function getLuckyNumber(name){
  const nameParts = name.toLowerCase().trim().split(" ").filter(parts => parts != "");
  let first = getCounts(nameParts[0]);
  let last = getCounts(nameParts[1]);
  const smallerVowelCount = Math.min(first.vowels, last.vowels);
  const smallerConsonantCount = Math.min(first.consonants, last.consonants);
  const largerVowelCount = Math.max(first.vowels, last.vowels);
  const largerConsonantCount = Math.max(first.consonants, last.consonants);
  const smallProduct = smallerVowelCount*smallerConsonantCount*Math.min(first.length, last.length);
  const largeProduct = largerVowelCount*largerConsonantCount*Math.max(first.length, last.length);
  const luckyNum = largeProduct - smallProduct;
  return luckyNum === 0 ? 13 : luckyNum;
}

console.log(getLuckyNumber("John Doe"));
console.log(getLuckyNumber("Olivia Lewis"));console.log(getLuckyNumber("James Wilson"));console.log(getLuckyNumber("Elizabeth Hernandez"));
console.log(getLuckyNumber("Mike Walker"));
console.log(getLuckyNumber("Chloe Perez"));
