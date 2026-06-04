function isPalindrome(word){
  word = word.toLowerCase();
  let mid = Math.floor(word.length/2);
  let leftHalf = word.slice(0,mid);
  let rightHalf = word.slice(mid+1);
  if (word.length%2 === 0){
    rightHalf = word.slice(mid)
  }
  let rightReversed = rightHalf.split("").reverse().join("");
  return leftHalf === rightReversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Jeffej"));

function findPalindromeBreaks(wordsArray){
  let array = [];
  for (let i=0; i < wordsArray.length; i++){
    if (!isPalindrome(wordsArray[i])){
      array.push(i)
    }
  }
  return array;
}

console.log(findPalindromeBreaks(["racecar", "hello", "level"]));


function findRepeatedPhrases(words,phraseLength){
  if (phraseLength >= words.length) {
    return [];
  }
  let phraseGroup = [];
  let results = [];
  let track = {};
  for (let i=0; i < words.length; i++){
    let group = words.slice(i,i+phraseLength);

    if (group.length === phraseLength){
      phraseGroup.push(group.join(" "));
    }
  }
  for (let i=0; i<phraseGroup.length;i++){
    let phrase = phraseGroup[i];
    if (track[phrase] === undefined){
      track[phrase] = [i]
    } else {
      track[phrase].push(i);
    }
  }

  for (const array of Object.values(track)){
    if (array.length > 1){
      results.push(...array)
    }
  }
  return results;
}


console.log(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"],2));


function analyseTexts(texts,phraseLength){
  if (texts.length === 0){
    return [];
  } else {
    let results = [];
    for (let i = 0; i < texts.length; i++) {
      let currentText = texts[i];
  
      let textAnalysis = {
        repeatedPhrases: findRepeatedPhrases(currentText, phraseLength),
        palindromeBreaks: findPalindromeBreaks(currentText)
  };
  
  results.push(textAnalysis);
}
return results;
  }
}

console.log(analyseTexts([ ["the", "cat", "sat"], ["hello", "world"] ], 2));
