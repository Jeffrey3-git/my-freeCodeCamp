function duplicateCharacterCount(str1, str2) {
  let counter = 0;
  for (const char of str2){
    if (str1.includes(char)) counter+=1;
  }
  return counter;
}

console.log(duplicateCharacterCount("aloha", "hei"));

console.log(duplicateCharacterCount("jambo", "bonjour"));

console.log(duplicateCharacterCount("hello", "hola"));

console.log(duplicateCharacterCount("ola", "hej"));

console.log(duplicateCharacterCount("ciao", "konnichiwa"));

console.log(duplicateCharacterCount("merhaba", "xin chao"));

console.log(duplicateCharacterCount("hello world", "hello to everyone around the world"));
